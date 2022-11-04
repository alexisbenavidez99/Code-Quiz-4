var scores = document.querySelector(".scores");
var timer = document.querySelector("#timer");
var mainPage = document.querySelector(".quiz-intro");
var startButton = document.querySelector(".start");
var question = document.querySelector("#question");
var answerButtons = document.querySelectorAll(".answer");

// The variable for how long the timer is 
var secondsLeft = 60;
// Array for the questions
var questions = ["Commonly used data types DO NOT include:", "The condition in an if / else statement is enclosed with ______.", "Arrays in JavaScript can be used to store ______.", "String values must be enclosed within ______ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"];
// This variable is telling it where the question should start (zero-index)
var questionIndex = 0;

var highScoreEl = document.querySelector('#high-score')

highScoreEl.style = 'display: none;'
// The variable is an object which is the answer key for the questions; each question has an object that holds each answer option and sets them to true or false

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

// This function sets the timer
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;
        // This clears the timer when it hits 0
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // This shows the high score board whenever the clock hits 0
            highScoreEl.style = 'display: block;'
        }
    }, 1000);
}

// This function renders the question
function renderQuestion() {
    // This renders the question to the main page and says the questions will start at the questionIndez which is 0 
    question.textContent = questions[questionIndex];
        
    // This sets the current questions for the current question (questionIndex); object.keys grabs the array properties from answerKeys and the possibleAnswers
    const currentPossibleAnswers = Object.keys(answerKey[questionIndex].possibleAnswers)
    console.log(currentPossibleAnswers)
    
    // This for loop is running through the length of the buttons for the answers
    for(var i = 0; i < answerButtons.length; i++) {
        var key = currentPossibleAnswers[i]; // This variable is setting the current answers index
        answerButtons[i].textContent = key // and then setting the text content to that answer button
        answerButtons[i].dataset.correct = answerKey[questionIndex].possibleAnswers[key]; // dataset.correct is telling the console if it is set to true or false
    }
}

// This for loop is running through all the answer buttons and adding an event listener to advance the question once an question is answered
for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function (event) {
        questionIndex++;
        console.log(event.target.dataset)
        if(event.target.dataset.correct === 'false') { // This if statement is saying if the answer is wrong, deduct 10 seconds
            secondsLeft = secondsLeft - 10
        }
        renderQuestion(); // This then runs the question function again
    })
}

// This event listener is listening for a click, and then running the timer and render question function
startButton.addEventListener("click", () => {
    setTime();
    renderQuestion();
});