// ========== Question Bank ==========
// Each theme (English, Aptitude, Communication, Grammar, Situation, Reasoning/DSA)
// has 3 difficulty levels: easy, medium, hard

const questions = {

  // 🟢 ---------------- ENGLISH SECTION ----------------
  english: {
    easy: [
      { q: "Choose the correct spelling:", opts: ["Acomodate", "Accommodate", "Acomodete", "Acommodate"], ans: 1 },
      { q: "Synonym of 'Fast':", opts: ["Quick", "Slow", "Lazy", "Weak"], ans: 0 },
      { q: "Antonym of 'Happy':", opts: ["Glad", "Joyful", "Sad", "Excited"], ans: 2 },
      { q: "She ____ to school daily.", opts: ["go", "goes", "gone", "going"], ans: 1 },
      { q: "Fill in the blank: He is ____ honest man.", opts: ["a", "an", "the", "none"], ans: 1 },
    ],
    medium: [
      { q: "Choose the correct tense: I ____ my homework before dinner.", opts: ["done", "did", "have done", "had done"], ans: 3 },
      { q: "Select the correct synonym for 'Brave':", opts: ["Coward", "Fearless", "Timid", "Weak"], ans: 1 },
      { q: "Which is a proper noun?", opts: ["river", "city", "John", "mountain"], ans: 2 },
      { q: "Choose correct sentence:", opts: ["He go to market", "He goes to market", "He going to market", "He gone market"], ans: 1 },
      { q: "Identify adjective: She wore a beautiful dress.", opts: ["She", "wore", "beautiful", "dress"], ans: 2 },
    ],
    hard: [
      { q: "Meaning of 'Benevolent':", opts: ["Kind", "Cruel", "Lazy", "Rude"], ans: 0 },
      { q: "Correct form of verb: They ____ been waiting since morning.", opts: ["has", "have", "had", "having"], ans: 1 },
      { q: "Fill: The teacher insisted ____ my coming early.", opts: ["on", "to", "for", "at"], ans: 0 },
      { q: "Pick the correct idiom: 'A blessing in disguise' means:", opts: ["Hidden advantage", "Bad luck", "Secret", "Mistake"], ans: 0 },
      { q: "Select the correct reported speech: He said, 'I am happy.'", opts: ["He said he is happy", "He said he was happy", "He said he has happy", "He said he be happy"], ans: 1 },
    ]
  },

  // 🟡 ---------------- APTITUDE SECTION ----------------
  aptitude: {
    easy: [
      { q: "10% of 200 is:", opts: ["10", "20", "30", "40"], ans: 1 },
      { q: "Average of 2,4,6 is:", opts: ["3", "4", "5", "6"], ans: 2 },
      { q: "Square root of 49:", opts: ["6", "7", "8", "9"], ans: 1 },
      { q: "12 + 8 ÷ 4 = ?", opts: ["5", "10", "14", "20"], ans: 2 },
      { q: "If x=3, then 2x+1=", opts: ["5", "6", "7", "8"], ans: 2 },
    ],
    medium: [
      { q: "Find the missing: 2, 4, 8, 16, ?", opts: ["18", "24", "32", "20"], ans: 2 },
      { q: "Simplify: (3² + 4²) =", opts: ["12", "25", "16", "20"], ans: 1 },
      { q: "If cost=100, profit=25%, SP=?", opts: ["100", "110", "125", "150"], ans: 2 },
      { q: "A train 100m long crosses 10m pole in 5s, speed?", opts: ["10m/s", "20m/s", "25m/s", "30m/s"], ans: 1 },
      { q: "LCM of 4,6,8:", opts: ["12", "16", "24", "36"], ans: 2 },
    ],
    hard: [
      { q: "Solve: (x-2)(x+3)=0, roots?", opts: ["2,-3", "-2,3", "0,5", "-5,0"], ans: 0 },
      { q: "If 5 workers finish in 10 days, 10 workers finish in?", opts: ["2", "3", "5", "7"], ans: 2 },
      { q: "Compound interest formula includes:", opts: ["Rate only", "Rate and Time", "Principal, Rate, Time", "None"], ans: 2 },
      { q: "Ratio of 3:6 equals:", opts: ["1:2", "2:3", "3:4", "1:3"], ans: 0 },
      { q: "Speed=Distance/Time, find Time if D=120, S=60:", opts: ["1hr", "2hr", "3hr", "4hr"], ans: 1 },
    ]
  },

  // 🔵 ---------------- COMMUNICATION SECTION ----------------
  communication: {
    easy: [
      { q: "Effective communication begins with:", opts: ["Speaking", "Listening", "Arguing", "Judging"], ans: 1 },
      { q: "Which is NOT a barrier to communication?", opts: ["Noise", "Feedback", "Language", "Distractions"], ans: 1 },
      { q: "Non-verbal communication includes:", opts: ["Gestures", "Emails", "Phone Calls", "Letters"], ans: 0 },
      { q: "Active listening means:", opts: ["Ignoring", "Interrupting", "Paying full attention", "Talking"], ans: 2 },
      { q: "Good communication requires:", opts: ["Confidence", "Clarity", "Respect", "All of these"], ans: 3 },
    ],
    medium: [
      { q: "Tone of voice affects:", opts: ["Only content", "Only gestures", "Message meaning", "Grammar"], ans: 2 },
      { q: "Feedback helps to:", opts: ["End talk", "Clarify message", "Ignore info", "Start confusion"], ans: 1 },
      { q: "Listening barriers are:", opts: ["Noise", "Disinterest", "Fatigue", "All"], ans: 3 },
      { q: "Eye contact shows:", opts: ["Confidence", "Disrespect", "Avoidance", "Distraction"], ans: 0 },
      { q: "Formal communication flows through:", opts: ["Official channels", "Gossip", "Rumors", "Friends"], ans: 0 },
    ],
    hard: [
      { q: "Assertive communication is:", opts: ["Aggressive", "Passive", "Respectful & confident", "Silent"], ans: 2 },
      { q: "Emotional intelligence helps in:", opts: ["Conflict resolution", "Misunderstanding", "Avoiding teamwork", "None"], ans: 0 },
      { q: "Listening involves:", opts: ["Hearing only", "Understanding & responding", "Talking more", "Interrupting"], ans: 1 },
      { q: "Effective communicator avoids:", opts: ["Empathy", "Feedback", "Jargon", "Clarity"], ans: 2 },
      { q: "Communication success depends on:", opts: ["Sender", "Receiver", "Both", "None"], ans: 2 },
    ]
  },

  // 🟣 ---------------- GRAMMAR SECTION ----------------
  grammar: {
    easy: [
      { q: "She ____ going to school.", opts: ["is", "are", "am", "be"], ans: 0 },
      { q: "They ____ finished the project.", opts: ["has", "have", "had", "having"], ans: 1 },
      { q: "There ____ a cat on the roof.", opts: ["is", "are", "were", "be"], ans: 0 },
      { q: "He ____ play football every day.", opts: ["do", "does", "did", "done"], ans: 1 },
      { q: "I ____ my homework yesterday.", opts: ["do", "does", "did", "doing"], ans: 2 },
    ],
    medium: [
      { q: "Choose correct sentence:", opts: ["He don't like tea", "He doesn't like tea", "He not like tea", "He no like tea"], ans: 1 },
      { q: "Plural of 'child' is:", opts: ["childs", "childes", "children", "childrens"], ans: 2 },
      { q: "Opposite gender of 'actor' is:", opts: ["actress", "female", "lady", "heroine"], ans: 0 },
      { q: "Past tense of 'write' is:", opts: ["wrote", "written", "writing", "write"], ans: 0 },
      { q: "Choose correct article: ____ umbrella.", opts: ["a", "an", "the", "no article"], ans: 1 },
    ],
    hard: [
      { q: "Identify clause type: 'I know that he is honest.'", opts: ["Main", "Subordinate", "Independent", "Simple"], ans: 1 },
      { q: "Passive of 'She is reading a book.':", opts: ["A book was read by her", "A book is being read by her", "A book read by her", "A book has read by her"], ans: 1 },
      { q: "Identify tense: 'He has been working since morning.'", opts: ["Present perfect", "Present continuous", "Present perfect continuous", "Past continuous"], ans: 2 },
      { q: "Fill: If I ____ rich, I would help you.", opts: ["am", "was", "were", "been"], ans: 2 },
      { q: "Identify preposition: 'He sat on the chair.'", opts: ["He", "sat", "on", "chair"], ans: 2 },
    ]
  },

  // 🔴 ---------------- SITUATION-BASED SECTION ----------------
  situation: {
    easy: [
      { q: "If a colleague disagrees with you, you should:", opts: ["Argue", "Listen calmly", "Ignore", "Complain"], ans: 1 },
      { q: "A client is angry. You should:", opts: ["Stay calm and listen", "Shout back", "Hang up", "Blame team"], ans: 0 },
      { q: "If you’re late for work, you should:", opts: ["Hide", "Inform manager", "Ignore", "Lie"], ans: 1 },
      { q: "If a friend is sad, you:", opts: ["Avoid them", "Support them", "Mock them", "Ignore"], ans: 1 },
      { q: "In teamwork, you should:", opts: ["Work alone", "Collaborate", "Compete", "Avoid tasks"], ans: 1 },
    ],
    medium: [
      { q: "If you made a mistake, you should:", opts: ["Hide it", "Blame others", "Admit and fix", "Ignore"], ans: 2 },
      { q: "During a meeting, you:", opts: ["Interrupt", "Stay silent", "Participate respectfully", "Avoid"], ans: 2 },
      { q: "If boss gives unclear instruction, you:", opts: ["Do guesswork", "Clarify politely", "Ignore", "Complain"], ans: 1 },
      { q: "If coworker performs poorly, you:", opts: ["Mock", "Support", "Report", "Avoid"], ans: 1 },
      { q: "Under stress, you should:", opts: ["Give up", "Plan calmly", "Argue", "Ignore work"], ans: 1 },
    ],
    hard: [
      { q: "If your project fails:", opts: ["Blame others", "Analyze mistakes", "Quit job", "Hide results"], ans: 1 },
      { q: "You’re managing a team conflict. You:", opts: ["Avoid it", "Listen to both sides", "Pick a side", "Ignore"], ans: 1 },
      { q: "Deadline tomorrow, team unready. You:", opts: ["Motivate team", "Leave early", "Delay quietly", "Ignore work"], ans: 0 },
      { q: "Client rejects idea. You:", opts: ["Get defensive", "Ask for feedback", "Blame client", "Argue"], ans: 1 },
      { q: "You found a colleague cheating. You:", opts: ["Join", "Inform manager", "Ignore", "Help hide"], ans: 1 },
    ]
  },

  // ⚫ ---------------- REASONING / DSA SECTION ----------------
  reasoning: {
    easy: [
      { q: "Which DS uses LIFO?", opts: ["Queue", "Stack", "Tree", "Graph"], ans: 1 },
      { q: "Linear DS example:", opts: ["Array", "Graph", "Tree", "Heap"], ans: 0 },
      { q: "Queue uses:", opts: ["LIFO", "FIFO", "Random", "Both"], ans: 1 },
      { q: "Stack top points to:", opts: ["Last element", "First element", "Middle", "None"], ans: 0 },
      { q: "Linked list nodes connect by:", opts: ["Pointers", "Arrays", "Stacks", "Classes"], ans: 0 },
    ],
    medium: [
      { q: "Binary search complexity:", opts: ["O(n)", "O(log n)", "O(n²)", "O(1)"], ans: 1 },
      { q: "Tree traversal left-root-right:", opts: ["Preorder", "Inorder", "Postorder", "Level"], ans: 1 },
      { q: "Graph traversal uses:", opts: ["DFS", "BFS", "Both", "None"], ans: 2 },
      { q: "Queue implemented using:", opts: ["Stack", "Array/LinkedList", "Graph", "Set"], ans: 1 },
      { q: "Circular Queue avoids:", opts: ["Overflow", "Underflow", "Memory Waste", "All"], ans: 2 },
    ],
    hard: [
      { q: "Heap property in Max Heap:", opts: ["Parent < Child", "Parent > Child", "Equal", "Random"], ans: 1 },
      { q: "Best case for Quick Sort:", opts: ["O(n)", "O(n log n)", "O(n²)", "O(1)"], ans: 1 },
      { q: "Hash collision handled by:", opts: ["Open addressing", "Chaining", "Both", "None"], ans: 2 },
      { q: "DFS uses which DS?", opts: ["Queue", "Stack", "Tree", "Array"], ans: 1 },
      { q: "Binary tree max nodes at level L:", opts: ["2^L", "L²", "L", "L!"], ans: 0 },
    ]
  }
};

// ========== Game Logic (Same as before) ==========
let currentTheme = "";
let currentLevel = "";
let currentSet = [];
let index = 0;
let score = 0;

function chooseSection(section) {
  document.getElementById("main-menu").classList.add("hidden");
  if (section === "soft") document.getElementById("soft-menu").classList.remove("hidden");
  else {
    currentTheme = "reasoning";
    document.getElementById("level-menu").classList.remove("hidden");
  }
}

function chooseLevel(theme) {
  currentTheme = theme;
  document.getElementById("soft-menu").classList.add("hidden");
  document.getElementById("level-menu").classList.remove("hidden");
}

function startQuiz(level) {
  currentLevel = level;
  currentSet = questions[currentTheme][currentLevel];
  document.getElementById("level-menu").classList.add("hidden");
  document.getElementById("quiz-area").classList.remove("hidden");
  index = 0; score = 0;
  showQuestion();
}

function showQuestion() {
  const q = currentSet[index];
  document.getElementById("question").textContent = `${index+1}. ${q.q}`;
  const optDiv = document.getElementById("options");
  optDiv.innerHTML = "";
  q.opts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    optDiv.appendChild(btn);
  });
}

function checkAnswer(i) {
  if (i === currentSet[index].ans) { score++; alert("✅ Correct!"); }
  else alert("❌ Wrong!");
  nextQuestion();
}

function nextQuestion() {
  index++;
  if (index < currentSet.length) showQuestion();
  else {
    alert(`🎯 Level Complete! Score: ${score}/${currentSet.length}`);
    location.reload();
  }
}

function backToMain() {
  document.getElementById("soft-menu").classList.add("hidden");
  document.getElementById("main-menu").classList.remove("hidden");
}

function backToSoft() {
  document.getElementById("level-menu").classList.add("hidden");
  document.getElementById("soft-menu").classList.remove("hidden");
}
