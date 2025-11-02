let currentQuestion = 0;
let score = 0;
let selectedLanguage;
let languageQuestions = [];

window.onload = function() {
  const user = localStorage.getItem("userEmail");
  if (!user) {
    alert("Please login first!");
    window.location.href = "../login.html";
    return;
  }
};  

window.onload = function () {
  selectedLanguage = localStorage.getItem('selectedLanguage');
  document.getElementById('language-title').innerText =
    selectedLanguage.toUpperCase() + " Quiz";

  if (questions[selectedLanguage]) {
    languageQuestions = questions[selectedLanguage];
    loadQuestion();
  } else {
    document.getElementById('question').innerText = "No questions available!";
  }
};

function loadQuestion() {
  const questionData = languageQuestions[currentQuestion];
  document.getElementById('question').innerText = questionData.question;

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = "";

  questionData.options.forEach(option => {
    const btn = document.createElement('button');
    btn.innerText = option;
    btn.classList.add('option-btn');
    btn.onclick = () => selectAnswer(option, questionData.answer);
    optionsContainer.appendChild(btn);
  });
}

function selectAnswer(selected, correct) {
  const options = document.querySelectorAll('.option-btn');
  options.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correct) {
      btn.classList.add('correct');
    } else if (btn.innerText === selected) {
      btn.classList.add('wrong');
    }
  });

  if (selected === correct) score++;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < languageQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('question-container').classList.add('hidden');
  document.getElementById('next-btn').classList.add('hidden');
  const result = document.getElementById('result');
  result.classList.remove('hidden');
  result.innerText = `Quiz Over! Your score: ${score}/${languageQuestions.length}`;
}
