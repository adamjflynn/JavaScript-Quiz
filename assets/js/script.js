document.getElementById('start-button').addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('start-button').remove();
    document.getElementById('header').remove();
    }


// variables

const question = document.getElementById('question');
const answer = Array.from(document.getElementsByClassName('choice-text'));
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

