import { questions } from './questions.js'

let forAnswer = [];

function shuffleQuestions(questions) {
    return questions.slice().sort(() => Math.random() - 0.5);
}

function displayFirstQuestion(question) {
    const element = document.getElementById('question');
    element.innerHTML = question;
}

function nextQuestion() {
    const question = forAnswer.pop();
    displayFirstQuestion(question);
    
    const element = document.getElementById('question-left');
    element.innerHTML = `${(questions.length - forAnswer.length)}/${questions.length}`;
}

document.addEventListener('DOMContentLoaded', function() {
    forAnswer = shuffleQuestions(questions);
    nextQuestion();
});
document.getElementById('next').addEventListener('click', nextQuestion);