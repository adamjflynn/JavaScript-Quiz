document.getElementById('start-button').addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('start-button').remove();
    document.getElementById('header').remove();
    }

// variables

const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('choice-text'));
const questionNumber = document.getElementById('questionNumber');
const numberCorrect = document.getElementById('score');

