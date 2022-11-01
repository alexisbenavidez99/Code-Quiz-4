var scores = document.querySelector(".scores");
var timer = document.querySelector(".timer");
var mainPage = document.querySelector(".quiz-intro");
var startButton = document.querySelector(".start");
var question = document.querySelector(".question-page");

var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
        // if statement to deduct time if question is answered wrong
    }, 1000);
}

function question1 () {
    
}


startButton.addEventListener("click", () => {
    setTime();
    question1();
});