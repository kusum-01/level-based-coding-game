// game1.js — handles selection, fetch, show one-by-one, unlock level

if (!localStorage.getItem("username") && !localStorage.getItem("userEmail")) {
  window.location.href = "/"; // redirect to login
}


const baseURL = window.location.origin + "/api";

const setup = document.getElementById("setup");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const playAgain = document.getElementById("play-again");
const toLevels = document.getElementById("to-levels");
const questionCard = document.getElementById("question-card");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const userNameSpan = document.getElementById("user-name");

let questions = [];
let current = 0;
let score = 0;
let chosenLang = null;
let chosenLevel = 1;

// show logged in name if available
const storedName = localStorage.getItem("username") || localStorage.getItem("userEmail");
if (storedName) userNameSpan.innerText = storedName;

// level buttons management (unlock from localStorage)
function refreshLevelButtons() {
  const lang = document.getElementById("language").value.toLowerCase();
  const unlocked = parseInt(localStorage.getItem(`${lang}_unlockedLevel`) || "1", 10);
  ["lv1","lv2","lv3"].forEach((id, idx) => {
    const btn = document.getElementById(id);
    const levelNum = idx + 1;
    if (levelNum <= unlocked) {
      btn.disabled = false; btn.classList.remove("locked");
    } else {
      btn.disabled = true; btn.classList.add("locked");
    }
  });
}
document.getElementById("language").addEventListener("change", refreshLevelButtons);
refreshLevelButtons();

// level click handlers
document.querySelectorAll(".level-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".level-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedLevel = btn.dataset.level;
  });
});
document.getElementById("start-btn").addEventListener("click", () => {
  if (!selectedLevel) {
    alert("Please select a level first!");
    return;
  }
  document.getElementById("setup").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  startLevel(selectedLevel);
});


// start quiz
startBtn.addEventListener("click", async () => {
  chosenLang = document.getElementById("language").value.toLowerCase();
  // chosenLevel set by click; default 1
  // validate unlocked
  const unlocked = parseInt(localStorage.getItem(`${chosenLang}_unlockedLevel`) || "1", 10);
  if (chosenLevel > unlocked) { alert("This level is locked. Complete previous levels first."); return; }

  // fetch questions
  try {
    const res = await fetch(`${baseURL}/questions?topic=${encodeURIComponent(chosenLang)}&level=${chosenLevel}`);
    if (!res.ok) {
      const j = await res.json().catch(()=>({}));
      throw new Error(j.message || "Failed to load questions");
    }
    questions = await res.json();
  } catch (err) {
    console.error(err);
    return alert("Could not load questions: " + (err.message || ""));
  }

  if (!questions.length) return alert("No questions found for this selection.");

  // init
  current = 0; score = 0;
  setup.classList.add("hidden");
  quiz.classList.remove("hidden");
  result.classList.add("hidden");
  showQuestion();
});

// show question
function showQuestion() {
  const q = questions[current];
  progressFill.style.width = `${Math.round((current / questions.length) * 100)}%`;
  progressText.innerText = `Question ${current + 1} / ${questions.length}`;

  // build options
  questionCard.innerHTML = `
    <h3>${q.question}</h3>
    <div class="options">
      ${q.options.map((opt, i) => `<label class="option"><input type="radio" name="opt" value="${opt}"> ${opt}</label>`).join("")}
    </div>
  `;

  // if user already answered this question (we won't store answers persistently in this version)
  // enable/disable prev/next
  prevBtn.disabled = current === 0;
  nextBtn.innerText = current === questions.length - 1 ? "Finish" : "Next";
  // remove previous selection (fresh)
  // add click handlers to option labels to show immediate color feedback
  document.querySelectorAll(".option input").forEach(r => {
    r.addEventListener("change", (e) => {
      // clear classes then mark selected
      document.querySelectorAll(".option").forEach(o=>o.classList.remove("selected"));
      e.target.closest(".option").classList.add("selected");
    });
  });
}

// next button
nextBtn.addEventListener("click", ()=> {
  const selected = document.querySelector('input[name="opt"]:checked');
  if (!selected) return alert("Please select an option to proceed");
  const chosen = selected.value;
  const correct = questions[current].answer;
  // mark score & add visual classes
  if (chosen === correct) {
    score++;
    // highlight correct
    selected.closest(".option").classList.add("correct");
  } else {
    selected.closest(".option").classList.add("wrong");
    // highlight the true correct option
    document.querySelectorAll('.option').forEach(lbl=>{
      if (lbl.textContent.trim() === correct) lbl.classList.add("correct");
    });
  }

  // small delay to show feedback then move on
  setTimeout(()=> {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      finishQuiz();
    }
  }, 600);
});

prevBtn.addEventListener("click", ()=> {
  if (current > 0) { current--; showQuestion(); }
});

function finishQuiz() {
  quiz.classList.add("hidden");
  result.classList.remove("hidden");
  document.getElementById("result-text").innerText = `You scored ${score} / ${questions.length}`;
  // unlock next level if passed threshold (e.g., >= 60%)
  const passPercent = 0.6;
  const perc = score / questions.length;
  const key = `${chosenLang}_unlockedLevel`;
  let unlocked = parseInt(localStorage.getItem(key) || "1", 10);
  if (perc >= passPercent && unlocked < 3) {
    unlocked = Math.min(3, unlocked + 1);
    localStorage.setItem(key, unlocked);
    alert(`🎉 You passed Level ${chosenLevel}! Level ${unlocked} unlocked for ${chosenLang.toUpperCase()}.`);
  } else if (perc < passPercent) {
    alert("You didn't reach the passing score. Try again!");
  }
}

// play again (same level)
// Play Again button → restart same level
document.getElementById("play-again").addEventListener("click", () => {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  current = 0;
  score = 0;
  showQuestion();
});

// back to levels (setup)
document.getElementById("to-levels").addEventListener("click", () => {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("setup").classList.remove("hidden");
  refreshLevelButtons();
});
