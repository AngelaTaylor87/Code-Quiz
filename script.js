const questions = [
    {
        question: 'Which of the following are JavaScript data types',
        answerA: 'var',
        answerB: 'if',
        answerC: 'const',
        answerD: 'string',
        correctAnswer: 'answerD'
    },

    {
        question: 'What tag is used to create a hyperlink in HTML',
        answerA: '<div>',
        answerB: '<br>',
        answerC: '<a>',
        answerD: '<img>',
        correctAnswer: 'AnswerC'
    },

    {
        question: 'Which is a property of flexbox',
        answerA: 'border',
        answerB: 'align-content',
        answerC: 'font-size',
        answerD: 'style',
        correctAnswer: 'AnswerB'

    }
]



var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 90;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

let shuffledQuestions = []

function handleQuestions() {
    
    while (shuffledQuestions.length <= 3) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if(!shuffledQuestions.includes(random)){
            shuffledQuestions.push(random)
        }
    }
}

let questionNumber = 1
let userScore = 0
let wrongAttempt = 0
let indexNumber = 0

function NextQuestion(index) {
    handleQuestions
}
const currentQuestion = shuffledQuestions[index]
document.getElementById("questions-display").innerHTML = currentQuestion.question;
	



