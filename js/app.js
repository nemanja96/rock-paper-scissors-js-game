// First and Second game part
let firstGamePart = document.getElementById("first-game-part");
let secondGamePart = document.getElementById("second-game-part");

// Show right img and color on second game part
let imagesArrey = ["rock.png", "paper.png", "scissors.png"];
let colorsArrey = ["#4361ee", "#ffb703", "#ef233c"];

// Person Counter
let personCounter = 0;
let showPersonCounter = document.getElementById("show-person-counter");

// Computer Counter
let computerCounter = 0;
let showComputerCounter = document.getElementById("show-computer-counter");

// Button Play Again
let playAgain = document.getElementById("play-again");
let resetScore = document.getElementById("reset-score");

// Color on second part of game
let personColor = document.getElementById("person-color");
let computerColor = document.getElementById("computer-color");

// Rock, Paper and Scissors buttons
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

// Show who is won
let result = document.getElementById("result");

// Person and Computer index
let personIndex = "undefined";
let computerIndex = "undefined";

// STA JE COVEK IZABRAO KAKO BI PRIKAZAO PRAVU BOJU I SLIKU
let person = document.getElementById("person");
let computer = document.getElementById("computer");

playAgain.addEventListener('click', function() {
    firstGamePart.style.display = "flex";
    secondGamePart.style.display = "none";
});

resetScore.addEventListener('click', function() {
    personCounter = 0;
    computerCounter = 0;

    showPersonCounter.innerHTML = personCounter;
    showComputerCounter.innerHTML = computerCounter;
    
    firstGamePart.style.display = "flex";
    secondGamePart.style.display = "none";
})

function showResult() {
    firstGamePart.style.display = "none";
    secondGamePart.style.display = "flex";
          
    computerIndex = Math.floor(Math.random() * (2 - 0 + 1) + 0);

    if(personIndex === computerIndex) {
        result.innerHTML = "NEREŠENO";
    }else if((personIndex == 0 && computerIndex == 1) || (personIndex == 1 && computerIndex == 2) || (personIndex == 2 && computerIndex == 0)) {
        result.innerHTML = "RAČUNAR JE POBEDIO!";
        computerCounter++;
        showComputerCounter.innerHTML = computerCounter;
    }else{
        result.innerHTML = "ČOVEK JE POBEDIO!";
        personCounter++;
        showPersonCounter.innerHTML = personCounter;
    }

    person.src= "./img/" + imagesArrey[personIndex];
    computer.src = "./img/" + imagesArrey[computerIndex];

    personColor.style.border = "12px solid " + colorsArrey[personIndex];
    computerColor.style.border = "12px solid " + colorsArrey[computerIndex];
}

rock.addEventListener('click', function() {
    personIndex = 0;
    showResult();
});

paper.addEventListener('click', function() {
    personIndex = 1;
    showResult();
});

scissors.addEventListener('click', function() {
    personIndex = 2;
    showResult();
});  