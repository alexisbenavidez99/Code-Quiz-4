var userScore = localStorage.getItem("highScore");
var parseUserScore = JSON.parse(userScore)
//scores.textContent = userScore;

for(var i=0; i<parseUserScore.length; i++){

    document.getElementById('storedScore').innerHTML +=
    `Initials: ${parseUserScore[0].initials}
    Scores: ${parseUserScore[0].score}
    `
}
