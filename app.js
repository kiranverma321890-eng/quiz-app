
// ================= QUESTIONS =================

const questions = {
  html: [
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      answers: [
        { text: "<link>", correct: false },
        { text: "<a>", correct: true },
        { text: "<href>", correct: false },
        { text: "<hyperlink>", correct: false },
      ],
    },
    {
      question: "Which element is used to insert a line break?",
      answers: [
        { text: "<break>", correct: false },
        { text: "<lb>", correct: false },
        { text: "<br>", correct: true },
        { text: "<newline>", correct: false },
      ],
    },
    {
      question: "Which attribute provides alternative text for an image?",
      answers: [
        { text: "alt", correct: true },
        { text: "src", correct: false },
        { text: "title", correct: false },
        { text: "href", correct: false },
      ],
    },
    {
      question: "Which declaration is used for HTML5?",
      answers: [
        { text: "<!DOCTYPE html5>", correct: false },
        { text: "<!DOCTYPE HTML PUBLIC>", correct: false },
        { text: "<!HTML>", correct: false },
        { text: "<!DOCTYPE html>", correct: true },
      ],
    },
    {
      question: "Which tag is used to create an ordered list?",
      answers: [
        { text: "<ul>", correct: false },
        { text: "<ol>", correct: true },
        { text: "<li>", correct: false },
        { text: "<list>", correct: false },
      ],
    },
    {
      question: "Which tag is used to display the largest heading?",
      answers: [
        { text: "<h6>", correct: false },
        { text: "<head>", correct: false },
        { text: "<h1>", correct: true },
        { text: "<heading>", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used to display an image?",
      answers: [
        { text: "<image>", correct: false },
        { text: "<img>", correct: true },
        { text: "<picture>", correct: false },
        { text: "<src>", correct: false },
      ],
    },
    {
      question: "Which tag is used to create a table row?",
      answers: [
        { text: "<td>", correct: false },
        { text: "<th>", correct: false },
        { text: "<tr>", correct: true },
        { text: "<table-row>", correct: false },
      ],
    },
    {
      question: "Which HTML element is used to create a form?",
      answers: [
        { text: "<input>", correct: false },
        { text: "<form>", correct: true },
        { text: "<fieldset>", correct: false },
        { text: "<button>", correct: false },
      ],
    },
    {
      question: "Which element is used to define the page title?",
      answers: [
        { text: "<meta>", correct: false },
        { text: "<header>", correct: false },
        { text: "<title>", correct: true },
        { text: "<headings>", correct: false },
      ],
    },
  ],

  css: [
    {
      question: "Which property changes the font size?",
      answers: [
        { text: "font-size", correct: true },
        { text: "font-style", correct: false },
        { text: "text-size", correct: false },
        { text: "font-weight", correct: false },
      ],
    },
    {
      question: "Which property changes the background color?",
      answers: [
        { text: "background-color", correct: true },
        { text: "bgcolor", correct: false },
        { text: "color-background", correct: false },
        { text: "background-style", correct: false },
      ],
    },
    {
      question: 'How do you select an element with id "demo"?',
      answers: [
        { text: "#demo", correct: true },
        { text: ".demo", correct: false },
        { text: "demo", correct: false },
        { text: "*demo", correct: false },
      ],
    },
    {
      question: "Which syntax is used for CSS comments?",
      answers: [
        { text: "// comment", correct: false },
        { text: "<!-- comment -->", correct: false },
        { text: "/* comment */", correct: true },
        { text: "** comment **", correct: false },
      ],
    },
    {
      question: "Which property makes text bold?",
      answers: [
        { text: "font-style", correct: false },
        { text: "font-weight", correct: true },
        { text: "text-decoration", correct: false },
        { text: "text-weight", correct: false },
      ],
    },
    {
      question: "Which CSS property controls the space outside an element?",
      answers: [
        { text: "padding", correct: false },
        { text: "border", correct: false },
        { text: "margin", correct: true },
        { text: "spacing", correct: false },
      ],
    },
    {
      question: "Which property is used to make a flex container?",
      answers: [
        { text: "display: block", correct: false },
        { text: "display: flex", correct: true },
        { text: "position: flex", correct: false },
        { text: "flex: display", correct: false },
      ],
    },
    {
      question: "Which symbol is used to select a class in CSS?",
      answers: [
        { text: "#", correct: false },
        { text: ".", correct: true },
        { text: "*", correct: false },
        { text: "@", correct: false },
      ],
    },
    {
      question: "Which property rounds the corners of an element?",
      answers: [
        { text: "border-style", correct: false },
        { text: "corner-radius", correct: false },
        { text: "border-radius", correct: true },
        { text: "round-border", correct: false },
      ],
    },
    {
      question: "Which CSS property changes the text color?",
      answers: [
        { text: "font-color", correct: false },
        { text: "text-color", correct: false },
        { text: "color", correct: true },
        { text: "background-color", correct: false },
      ],
    },
  ],

  javascript: [
    {
      question: "Inside which HTML element do we put JavaScript code?",
      answers: [
        { text: "<js>", correct: false },
        { text: "<script>", correct: true },
        { text: "<javascript>", correct: false },
        { text: "<code>", correct: false },
      ],
    },
    {
      question: 'How do you display "Hello World" in an alert box?',
      answers: [
        { text: 'msg("Hello World");', correct: false },
        { text: 'alertBox("Hello World");', correct: false },
        { text: 'alert("Hello World");', correct: true },
        { text: 'msgBox("Hello World");', correct: false },
      ],
    },
    {
      question: "Which keyword declares a block-scoped variable?",
      answers: [
        { text: "var", correct: false },
        { text: "let", correct: true },
        { text: "define", correct: false },
        { text: "dim", correct: false },
      ],
    },
    {
      question: "Which operator is used for strict equality?",
      answers: [
        { text: "=", correct: false },
        { text: "==", correct: false },
        { text: "===", correct: true },
        { text: "!=", correct: false },
      ],
    },
    {
      question: "Which method selects an element by its ID?",
      answers: [
        { text: "getElementById()", correct: true },
        { text: "getElementByClass()", correct: false },
        { text: "queryById()", correct: false },
        { text: "selectId()", correct: false },
      ],
    },
    {
      question: "Which method adds an item to the end of an array?",
      answers: [
        { text: "pop()", correct: false },
        { text: "shift()", correct: false },
        { text: "push()", correct: true },
        { text: "unshift()", correct: false },
      ],
    },
    {
      question: "Which symbol is used for single-line comments?",
      answers: [
        { text: "//", correct: true },
        { text: "/*", correct: false },
        { text: "<!--", correct: false },
        { text: "#", correct: false },
      ],
    },
    {
      question: "Which function converts a string into an integer?",
      answers: [
        { text: "NumberString()", correct: false },
        { text: "parseInt()", correct: true },
        { text: "toString()", correct: false },
        { text: "parseText()", correct: false },
      ],
    },
    {
      question: "Which event occurs when a user clicks an element?",
      answers: [
        { text: "onchange", correct: false },
        { text: "onmouseover", correct: false },
        { text: "onclick", correct: true },
        { text: "onload", correct: false },
      ],
    },
    {
      question: "Which keyword is used to define a function?",
      answers: [
        { text: "method", correct: false },
        { text: "function", correct: true },
        { text: "func", correct: false },
        { text: "define", correct: false },
      ],
    },
  ],
};


// ================= HTML ELEMENTS =================

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const questionNumber = document.getElementById("questionNumber");
const scoreNumber = document.getElementById("scoreNumber");
const nextButton = document.getElementById("next");
const timerElement = document.getElementById("timer");

const categoryScreen = document.getElementById("categoryScreen");
const quizBox = document.getElementById("quizBox");


// ================= QUIZ VARIABLES =================

let currentCategory = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

let timeLeft = 10;
let timerInterval = null;
let questionLocked = false;


// ================= CATEGORY SELECTION =================

function selectCategory(category) {
  currentCategory = category;
  currentQuestions = questions[category];

  categoryScreen.style.display = "none";
  quizBox.style.display = "block";

  questionNumber.style.display = "block";
  scoreNumber.style.display = "block";

  startQuiz();
}


// ================= START QUIZ =================

function startQuiz() {
  clearInterval(timerInterval);

  currentQuestionIndex = 0;
  score = 0;

  nextButton.innerText = "Next";
  nextButton.style.display = "none";

  showQuestion();
}


// ================= SHOW QUESTION =================

function showQuestion() {
  resetState();

  const currentQuestion = currentQuestions[currentQuestionIndex];

  questionElement.innerText =
    `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  questionNumber.innerText =
    `Question: ${currentQuestionIndex + 1} / ${currentQuestions.length}`;

  scoreNumber.innerText =
    `Score: ${score} / ${currentQuestions.length}`;

  currentQuestion.answers.forEach((answer, index) => {
    const option = document.createElement("p");

    option.classList.add("optionItems");
    option.innerText = answer.text;

    option.addEventListener("click", () => {
      selectAnswer(option, answer.correct);
    });

    optionsElement.appendChild(option);
  });

  startTimer();
}


// ================= RESET QUESTION STATE =================

function resetState() {
  clearInterval(timerInterval);

  questionLocked = false;

  nextButton.style.display = "none";
  optionsElement.innerHTML = "";

  timeLeft = 10;
  timerElement.innerText = `Time: ${timeLeft}s`;
}


// ================= TIMER =================

function startTimer() {
  timeLeft = 10;
  timerElement.innerText = `Time: ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;

    timerElement.innerText = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeUp();
    }
  }, 1000);
}


// ================= TIME UP =================

function timeUp() {
  if (questionLocked) return;

  questionLocked = true;

  const optionItems = document.querySelectorAll(".optionItems");

  optionItems.forEach((option) => {
    option.style.pointerEvents = "none";
  });

  // Highlight the correct answer
  const correctIndex = currentQuestions[
    currentQuestionIndex
  ].answers.findIndex((answer) => answer.correct);

  if (correctIndex !== -1) {
    optionItems[correctIndex].classList.add("correct");
  }

  timerElement.innerText = "Time's Up!";

  // Automatically move to the next question
  setTimeout(() => {
    moveToNextQuestion();
  }, 1000);
}


// ================= SELECT ANSWER =================

function selectAnswer(optionElement, isCorrect) {
  if (questionLocked) return;

  questionLocked = true;

  clearInterval(timerInterval);

  const optionItems = document.querySelectorAll(".optionItems");

  optionItems.forEach((option) => {
    option.style.pointerEvents = "none";
  });

  if (isCorrect) {
    optionElement.classList.add("correct");
    score++;
  } else {
    optionElement.classList.add("wrong");

    const correctIndex = currentQuestions[
      currentQuestionIndex
    ].answers.findIndex((answer) => answer.correct);

    optionItems[correctIndex].classList.add("correct");
  }

  scoreNumber.innerText =
    `Score: ${score} / ${currentQuestions.length}`;

  nextButton.style.display = "block";
}


// ================= NEXT QUESTION =================

function moveToNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}


// ================= NEXT BUTTON =================

nextButton.addEventListener("click", () => {
  if (!questionLocked) return;

  moveToNextQuestion();
});


// ================= SHOW RESULT =================

function showResult() {
  clearInterval(timerInterval);

  questionElement.innerText = "Quiz Completed!";

  optionsElement.innerHTML = `
    <h2>Your Score: ${score}/${currentQuestions.length}</h2>
    <p>Category: ${currentCategory.toUpperCase()}</p>
    <button id="restart">Try Again</button>
    <button id="changeCategory">Choose Another Category</button>
  `;

  questionNumber.style.display = "none";
  scoreNumber.style.display = "none";

  nextButton.style.display = "none";
  timerElement.innerText = "";

  document.getElementById("restart").addEventListener("click", () => {
    questionNumber.style.display = "block";
    scoreNumber.style.display = "block";
    startQuiz();
  });

  document.getElementById("changeCategory").addEventListener("click", () => {
    clearInterval(timerInterval);

    quizBox.style.display = "none";
    categoryScreen.style.display = "block";
  });
}
