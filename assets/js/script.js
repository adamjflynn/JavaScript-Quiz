// document.getElementById('start-button').addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('start-button').remove();
    document.getElementById('header').remove();
    }


// variables

const question = document.getElementById('question');
const answer = Array.from(document.getElementsByClassName('answer-text'));
const questionNumber = document.getElementById('questionNumber');
const numberCorrect = document.getElementById('score');

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
        question: "The Condition in an if / else statement is enclosed with _______.",
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
        question: "String values must be enclosed within _______ when being assigned to variables.",
            answer1: "quotes",
            answer2: "curly brackets",
            answer3: "parenthesis",
            answer4: "square brackets",
            answer: 2,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            answer1: "quotes",
            answer2: "curly brackets",
            answer3: "parenthesis",
            answer4: "square brackets",
            answer: 3,
    },
];


// Start Quiz
let submitcount= 0;
let questionCounter = 0;
questionsFunc = () => {
    questions.forEach((e,i) => {
        console.log(e);
        console.log(e.question);
        document.querySelector('#question').innerHTML = questions[questionCounter].question;
        document.querySelector('.answers-container .answer-text[data-number="1"]').innerHTML = questions[questionCounter].answer1;
        document.querySelector('.answers-container .answer-text[data-number="2"]').innerHTML = questions[questionCounter].answer2;
        document.querySelector('.answers-container .answer-text[data-number="3"]').innerHTML = questions[questionCounter].answer3;
        document.querySelector('.answers-container .answer-text[data-number="4"]').innerHTML = questions[questionCounter].answer4;
        document.querySelector('.answer-outcome').setAttribute('data-answer',questions[questionCounter].answer);
        //let quiz = document.querySelector("#quiz");
        //quiz.append('<h2>'+e.question+'</h2><p>'+e.answer1+'</p>');
    }); 
}
questionsFunc();
let answeredQuestion = document.querySelectorAll('.answers-container');
answeredQuestion.forEach((e,i) => {
    console.log(e);
    e.addEventListener('click', ()=>{
        console.log('Clicked');
        console.log(e);
        console.log(i);
        let correctAnswer = Number(document.querySelector('.answer-outcome').getAttribute('data-answer'));
        console.log(correctAnswer); 
        if ( i === correctAnswer ) {
            console.log('Correct Answer');
            document.querySelector('.answer-outcome').innerHTML = "Correct!";
            // put the two lines below in a settimeout
            questionCounter += 1;
            questionsFunc();
        } else {
            console.log('Incorrect Answer');
            document.querySelector('.answer-outcome').innerHTML = "Incorrect!";
            // put the two lines below in a settimeout
            questionCounter += 1;
            questionsFunc();
        }
    });
});


// var timeLeft = 75;
// var elem = document.getElementById('timer');
// var timerId = setInterval(countdown, 1000);
