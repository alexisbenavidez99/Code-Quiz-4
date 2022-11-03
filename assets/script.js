var scores = document.querySelector(".scores");
var timer = document.querySelector("#timer");
var mainPage = document.querySelector(".quiz-intro");
var startButton = document.querySelector(".start");
var question = document.querySelector("#question");
var answerButtons = document.querySelectorAll(".answer");

var secondsLeft = 60;
var questions = ["Commonly used data types DO NOT include:", "The condition in an if / else statement is enclosed with ______.", "Arrays in JavaScript can be used to store ______.", "String values must be enclosed within ______ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"];
var questionIndex = 0;

var answerKey = {
    0: {
        possibleAnswers: {
            'strings': false,
            'booleans': false,
            'alerts': true,
            'numbers': false
        }
    },
    1: {
        possibleAnswers: {
            'quotes': false,
            'curly brackets': false,
            'parentheses': true,
            'square brackets': false
        }
    },
    2: {
        possibleAnswers: {
            'numbers and strings': false,
            'other arrays': false,
            'booleans': false,
            'all of the above': true,
        }
    },
    3: {
        possibleAnswers: {
            'commas': false,
            'curly brackets': false,
            'quotes': true,
            'parentheses': false
        }
    },
    4: {
        possibleAnswers: {
            'JavaScript': false,
            'Terminal/Bash': false,
            'For loops': false,
            'console.log': true
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