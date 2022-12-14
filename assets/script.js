var scores = document.querySelector("#current-score");
var timer = document.querySelector("#timer");
var mainPage = document.querySelector(".quiz-intro");
var startButton = document.querySelector(".start");
var question = document.querySelector("#question");
var answerButtons = document.querySelectorAll(".answer");
var questionPage = document.querySelector(".question-page");
var correctEl = document.querySelector(".correct");
var incorrectEl = document.querySelector(".incorrect");
var initialEl = document.querySelector("#initial-button");
var initialInputEl = document.querySelector("#initials");
var finalScore = 0;
// The variable for how long the timer is 

var secondsLeft = 60;

// Array for the questions

var questions = ["Commonly used data types DO NOT include:", "The condition in an if / else statement is enclosed with ______.", "Arrays in JavaScript can be used to store ______.", "String values must be enclosed within ______ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"];

// This variable is telling it where the question should start (zero-index)

var questionIndex = 0;

var highScoreEl = document.querySelector('#high-score');
var scoreReportEl = document.querySelector('#score-report');
var highScorePage = document.querySelector('.view-scores');

questionPage.style = 'display: none;'
scoreReportEl.style = 'display: none;'
correctEl.style = 'display: none;'
incorrectEl.style = 'display: none;'

// The variable is an object which is the answer key for the questions; each question has an object that holds each answer option and sets them to true or false

var answerKey = {
    0: {
        possibleAnswers: {
            '1. strings': false,
            '2. booleans': false,
            '3. alerts': true,
            '4. numbers': false
        }
    },
    1: {
        possibleAnswers: {
            '1. quotes': false,
            '2. curly brackets': false,
            '3. parentheses': true,
            '4. square brackets': false
        }
    },
    2: {
        possibleAnswers: {
            '1. numbers and strings': false,
            '2. other arrays': false,
            '3. booleans': false,
            '4. all of the above': true,
        }
    },
    3: {
        possibleAnswers: {
            '1. commas': false,
            '2. curly brackets': false,
            '3. quotes': true,
            '4. parentheses': false
        }
    },
    4: {
        possibleAnswers: {
            '1. JavaScript': false,
            '2. Terminal/Bash': false,
            '3. For loops': false,
            '4. console.log': true
        }
    }
}

// This function sets the timer

function setTime() {
    // This makes the main page text display none when the start button is clicked
    mainPage.style = 'display: none;'
    // Styling for questions
    questionPage.style = 'display: block;'

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;
        // This clears the timer when it hits 0
        if (secondsLeft === 0 || questionIndex === questions.length) {
            clearInterval(timerInterval);
            // This shows the high score board whenever the clock hits 0 and hides the question page
            questionPage.innerHTML = ''
            incorrectEl.innerHTML = ''
            correctEl.innerHTML = ''
            scoreReportEl.style = 'display: block;'
        }
    }, 1000);
}

// This function renders the question

function renderQuestion() {
    // This if statement is saying if the question index is less than the questions length, run the first block of code, ELSE show the final score which is the seconds left

    if (questionIndex < questions.length) {

    
    // This renders the question to the main page and says the questions will start at the questionIndez which is 0 
    question.textContent = questions[questionIndex];
       
    // This sets the current questions for the current question (questionIndex); object.keys grabs the array properties from answerKeys and the possibleAnswers
    const currentPossibleAnswers = Object.keys(answerKey[questionIndex].possibleAnswers)
    
    // This for loop is running through the length of the buttons for the answers
    for(var i = 0; i < answerButtons.length; i++) {
        var key = currentPossibleAnswers[i]; // This variable is setting the current answers index
        answerButtons[i].textContent = key // and then setting the text content to that answer button
        answerButtons[i].dataset.correct = answerKey[questionIndex].possibleAnswers[key]; // dataset.correct is telling the console if it is set to true or false
    }
    } else { finalScore = secondsLeft;
        scores.textContent = finalScore;
    }
}

// This for loop is running through all the answer buttons and adding an event listener to advance the question once an question is answered
if (questionIndex < questions.length) {
    
for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function (event) {
        console.log(2)
        questionIndex++;
        correctEl.style = 'display: none;'
        incorrectEl.style = 'display: none;'
        if (event.target.dataset.correct === 'false') { // This if statement is saying if the answer is wrong, deduct 10 seconds
            secondsLeft = secondsLeft - 10
            incorrectEl.style = 'display: block;'
        }
        if (event.target.dataset.correct === 'true') {
            correctEl.style = 'display: block;'
        }
        renderQuestion(); // This then runs the question function again
    })
} 
}

// Local storage

// JSON can only do 2 things: parse and stringify
// JSON.parse: the process of converting a JSON object to text
// JSON.stringify: converts a JS vaule to a string

// JSON.parse is being used here to grab the highscore from local storage and compares it to an empty array
var parseUserScore = JSON.parse(localStorage.getItem("highScore")) || [];

// This if statement is saying if the parseUserScore AND the parseUserScore length is = 0 and create a variable with an empty array.
// The else statement is saying if the that is the if condition isn't met then make a variable = to parseUserScore 
if (parseUserScore && parseUserScore.length === 0)
{var localStorageArray = [];} 
else
{var localStorageArray = parseUserScore;}

// This event listener is listening for a click and then running the event that creates the initials variable and sets it = to the initial input value
// The highscore variable is equal to the initials value and the score which is equal to the final score value
initialEl.addEventListener("click", (event) => {
    event.preventDefault();
    var initials = initialInputEl.value
    var highScore = {
        initials: initials,
        score: finalScore
    }
    localStorageArray.push(highScore) // This is grabbing the local storage array and pushin git to the highscore variable
    localStorage.setItem("highScore", JSON.stringify(localStorageArray)) // This is setting the local storage item to highscore and converting the local storage array to a string
});




// This event listener is listening for a click, and then running the timer and render question function

startButton.addEventListener("click", () => {
    setTime();
    renderQuestion();
});