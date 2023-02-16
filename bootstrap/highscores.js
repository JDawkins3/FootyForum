/*const highScoresList = document.querySelector('#highScoresList');
const highScores =JSON.parse(localStorage.getItem(highScores)) || [];

highScoresList.innerHTML = 
highScores.map(score => {
    return '<li class = "high-score">${score.name} - ${score.score}</li>'
}).join('')*/

let homeTeam1 = document.getElementById("teamselect3");
let AwayTeam1 = document.getElementById("teamselect4");
let submitHome3 = document.getElementById("submit3");
const Chosen11 = document.createElement('p');
Chosen21 = document.createElement('p');



const genRand1 = () => Math.floor(Math.random() * (150 - 30 + 1) + 30)
const genRand21 = () => Math.floor(Math.random() * (140 - 30 + 1) + 30)

submitHome3.addEventListener("click", function(){

    Chosen11.innerText = homeTeam1.value + ": " + genRand1();
    para11 = document.getElementById("hometeamp1");
    para11.append(Chosen11);
    Chosen21.innerText = AwayTeam1.value  + ": " + genRand21();
    para21 = document.getElementById("awayteamp1");
    para21.append(Chosen21);

})