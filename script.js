var start = document.getElementById("start");
var firstPage = document.getElementById("firstPage");
var timeEl = document.querySelector(".time");
var secondsLeft = 30;

var answers = document.getElementById("answers");

var questionNo = document.getElementById("questionNo");
var quiz = document.getElementById("mainQuiz");
var multiple = document.getElementById("multiple");
var question = document.getElementById("question");
var isCorrect = ["Correct Answer. You Rock!", "Wrong Answer, Sorry! You lost 10 seconds!"]
var newQuestion = [
	{
		question: "1.What is the longest that an elephant has ever lived? (That we know of)",
		choice1: "Variable",
		choice2: "Various",
		choice3: "Variety",
		choice4: "Varicose vein",
		correct: "1",
	},
	{
		question: "During program development, software requirements specify",
		choice1: "VHow the program will accomplish the task",
		choice2: "What the task is that the program must perform",
		choice3: "How to divide the task into subtasks",
		choice4: "How to test the program when it is done",
		correct: "2",
	},
	{
		question: "_______ is the process of finding errors and fixing them within a program.",
		choice1: "Compiling",
		choice2: "Excuting",
		choice3: "Scanning",
		choice4: "Debugging",
		correct: "4",
	},
	{
		question: "Which symbol indicates an ID?",
		choice1: "@",
		choice2: "*",
		choice3: "#",
		choice4: "!",
		correct: "3",
	}]
var lastQuestionIndex = newQuestion.length - 1;
var runningQuestionIndex = 0;
var results = document.getElementById("results");
var score1 = document.querySelector("#score");

start.addEventListener("click", function (event) {
	firstPage.parentNode.removeChild(firstPage)
	setTime();
	quizStart();
	renderQuestion();
	checkAnswer(answer);


});


function setTime() {
	var timerInterval = setInterval(function () {
		secondsLeft--;
		timeEl.textContent = secondsLeft + " seconds left";

		if (secondsLeft <= 0) {
			clearInterval(timerInterval);
			score();
		}

	}, 1000);
}

function quizStart() {
	quiz.style.visibility = "visible";
}
function renderQuestion() {
	var q = newQuestion[runningQuestionIndex];
	question.innerHTML = q.question;
	answer1.innerHTML = q.choice1;
	answer2.innerHTML = q.choice2;
	answer3.innerHTML = q.choice3;
	answer4.innerHTML = q.choice4;
}
function checkAnswer(answer) {
	if (newQuestion[runningQuestionIndex].correct == answer) {
		multiple.innerText = isCorrect[0];

	} else {
		multiple.innerText = isCorrect[1];
		timeOff();

	}
	if (runningQuestionIndex < lastQuestionIndex) {
		runningQuestionIndex++;
		renderQuestion();

	} else {
		score();
		clearInterval(timerInterval);
		
	}
}

function score() {

	quiz.parentNode.removeChild(quiz);
	results.style.visibility = "visible";
	if (secondsLeft <= 0) { score1.textContent = "0 POINTS" }
	else {
		score1.textContent = secondsLeft + " POINTS"
	}
}
function timeOff() {
	secondsLeft -= 10;
}
