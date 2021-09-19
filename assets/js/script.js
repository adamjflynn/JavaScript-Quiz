document.getElementById('start-button').addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('start-button').remove();
    document.getElementById('header').remove();
    }


// variables

const question = document.getElementById('question');
const answer = Array.from(document.getElementsByClassName('answer-text'));
const questionNumber = document.getElementById('questionNumber');
const numberCorrect = document.getElementById('score');

let curQuestion = {};
let answerInput = false;
let score = 0;

let questions = [
    {
        question: "Commonly used data types do NOT include:",
            answer1: "strings",
            answer2: "booleans",
            answer3: "alerts",
            answer4: "numbers",
            answer: 3,
    },
    {
        question: "The Condition in an if / else statement is enclosed with _______.",
            answer1: "quotes",
            answer2: "curly brackets",
            answer3: "parenthesis",
            answer4: "square brackets",
            answer: 3,
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
            answer1: "numbers and strings",
            answer2: "other arrays",
            answer3: "booleans",
            answer4: "all of the above",
            answer: 4,
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
            answer1: "quotes",
            answer2: "curly brackets",
            answer3: "parenthesis",
            answer4: "square brackets",
            answer: 3,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            answer1: "quotes",
            answer2: "curly brackets",
            answer3: "parenthesis",
            answer4: "square brackets",
            answer: 4,
    },
];


// Start Quiz

quizStart = () => {
    score = 0;
    availableQuestions: = [...questions];
    getNextQuestion();
};

getNextQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('end.html');
    }
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    curQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    answer.forEach((answer) => {
        const number = answer.dataset['number'];
        answer.innerText = currentQuestion['answer' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

answer.forEach((answer) => {
    answer.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedanswer = e.target;
        const selectedAnswer = selectedanswer.dataset['number'];

        var resultBox = document.getElementById("correct-text");
        if (selectedAnswer == currentQuestion.answer) {
            resultBox.innerHTML="Correct!",document.getElementById('correct-text').style.fontSize = "xx-large";
            incrementScore(CORRECT_BONUS);
        } else {
            resultBox.innerHTML="Wrong!",document.getElementById('correct-text').style.fontSize = "xx-large";
            elem.innerHTML = timeLeft;
            timeLeft -= 10;
        }

        getNewQuestion();
    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame();

const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const clearHighScoresBtn = document.getElementById("clearHighScoresBtn");

highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");

clearHighScoresBtn.addEventListener('click', () =>{
    localStorage.clear();
    highScoresList.innerHTML = ""
});
