var scores = document.querySelector(".scores");
var timer = document.querySelector("#timer");
var mainPage = document.querySelector(".quiz-intro");
var startButton = document.querySelector(".start");
var question = document.querySelector("#question");
var answerButtons = document.querySelectorAll(".answer");

var secondsLeft = 60;
var questions = ["How are you?", "What are you doing?"];
var questionIndex = 0;

var answerKey = {
    0: {
        possibleAnswers: {
            'yes': true,
            'no': false,
            'mayne': false,
            'check back with me later': false
        }
    }
}
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }

        question.textContent = questions[questionIndex];
        
        const currentPossibleAnswers = Object.keys(answerKey[0])
        console.log(currentPossibleAnswers)
        
        for(var i = 0; i < answerButtons.length; i++) {
            answerButtons[i].textContent = currentPossibleAnswers[i]
        }
        // if statement to deduct time if question is answered wrong
    }, 1000);
}

for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function () {
        questionIndex++;
    })
}

startButton.addEventListener("click", () => {
    setTime();
});