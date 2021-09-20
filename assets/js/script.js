// document.getElementById('start-button').addEventListener('click', startQuiz);

function startQuiz() {
	document.getElementById("start-button").remove();
	document.getElementById("header").remove();
}

// variables

const question = document.getElementById("question");
const answer = Array.from(document.getElementsByClassName("answer-text"));
const questionNumber = document.getElementById("questionNumber");
const numberCorrect = document.getElementById("score");

let currentQuestion = {};
let answerInput = false;
let score = 0;

let questions = [
	{
		question: "Commonly used data types do NOT include:",
		answer1: "strings",
		answer2: "booleans",
		answer3: "alerts",
		answer4: "numbers",
		answer: 2,
	},
	{
		question:
			"The Condition in an if / else statement is enclosed with _______.",
		answer1: "quotes",
		answer2: "curly brackets",
		answer3: "parenthesis",
		answer4: "square brackets",
		answer: 2,
	},
	{
		question: "Arrays in JavaScript can be used to store _______.",
		answer1: "numbers and strings",
		answer2: "other arrays",
		answer3: "booleans",
		answer4: "all of the above",
		answer: 3,
	},
	{
		question:
			"String values must be enclosed within _______ when being assigned to variables.",
		answer1: "quotes",
		answer2: "curly brackets",
		answer3: "parenthesis",
		answer4: "square brackets",
		answer: 2,
	},
	{
		question:
			"A very useful tool used during development and debugging for printing content to the debugger is:",
		answer1: "JaveScript",
		answer2: "For loops",
		answer3: "Terminal bash",
		answer4: "console.log",
		answer: 3,
	},
];

// Start Quiz

var timeleft = 75;
var downloadTimer = setInterval(function () {
	if (timeleft <= 0) {
		clearInterval(downloadTimer);
		document.getElementById("timer").innerHTML = "Finished";
	} else {
		document.getElementById("timer").innerHTML = timeleft;
	}
	timeleft -= 1;
}, 1000);

let submitcount = 0;
let questionCounter = 0;
questionsFunc = () => {
	questions.forEach((e, i) => {
		document.querySelector("#question").innerHTML =
			questions[questionCounter].question;
		document.querySelector(
			'.answers-container .answer-text[data-number="1"]'
		).innerHTML = questions[questionCounter].answer1;
		document.querySelector(
			'.answers-container .answer-text[data-number="2"]'
		).innerHTML = questions[questionCounter].answer2;
		document.querySelector(
			'.answers-container .answer-text[data-number="3"]'
		).innerHTML = questions[questionCounter].answer3;
		document.querySelector(
			'.answers-container .answer-text[data-number="4"]'
		).innerHTML = questions[questionCounter].answer4;
		document
			.querySelector(".answer-outcome")
			.setAttribute("data-answer", questions[questionCounter].answer);
	});
};
questionsFunc();
quizSummary = () => {
	let finish = document.querySelector("#quiz");
	finish.append();
};
let answeredQuestion = document.querySelectorAll(".answers-container");
let quizLength = questions.length;
let finalTime = 0;
answeredQuestion.forEach((e, i) => {
	console.log(e);
	e.addEventListener("click", () => {
		console.log("Clicked");
		let correctAnswer = Number(
			document.querySelector(".answer-outcome").getAttribute("data-answer")
		);
		if (i === correctAnswer) {
			document.querySelector(".answer-outcome").innerHTML = "Correct!";
			if (quizLength === questionCounter + 1) {
				console.log("made it to the end");
				finalTime = timeleft;
				document.querySelector("#timer").setAttribute("style", "display:none;");
				document.querySelector("#quiz").setAttribute("style", "display:none;");
				document
					.querySelector("#summary")
					.setAttribute("style", "display:block;");
			} else if (questionCounter + 1 <= quizLength) {
				questionCounter += 1;
				questionsFunc();
			}
		} else {
			console.log("Incorrect Answer");
			document.querySelector(".answer-outcome").innerHTML = "Incorrect!";
			console.log(timeleft);
			console.log(timeleft - 10);
			timeleft = timeleft - 10;
			if (quizLength === questionCounter + 1) {
				console.log("made it to the end");
				finalTime = timeleft;
				document.querySelector("#timer").setAttribute("style", "display:none;");
				document.querySelector("#quiz").setAttribute("style", "display:none;");
				document
					.querySelector("#summary")
					.setAttribute("style", "display:block;");
			} else if (questionCounter + 1 <= quizLength) {
				questionCounter += 1;
				questionsFunc();
			}
		}
	});
});
document.querySelector("button").addEventListener("click", () => {
	let highScoreInfo = document.querySelector("input").value;
	let highScoreList = document.querySelector("#highScore");
	console.log(highScoreInfo);
	// let li = document.createElement('li');
	highScoreList.append(highScoreInfo + " " + finalTime);
});

document.querySelector(".hs-button").addEventListener("click", () => {
	document.querySelector("#highScore").setAttribute("style", "display:block;");
	document.querySelector("#quiz").setAttribute("style", "display:none;");
	document.querySelector("#summary").setAttribute("style", "display:none;");
});

// var timeLeft = 75;
// var elem = document.getElementById('timer');
// var timerId = setInterval(countdown, 1000);
