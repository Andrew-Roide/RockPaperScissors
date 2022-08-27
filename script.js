var choiceRock = "Rock";
var choicePaper = "Paper";
var choiceScissors = "Scissors";
var playerOneScore = 0;
var playerTwoScore = 0;

// random number computer will generate
function computerSelection() {
    let computerPlay = [choiceRock, choicePaper, choiceScissors];
    let randomSelection = Math.floor(Math.random() * computerPlay.length);
    let randomComputerSelection = computerPlay[randomSelection];
    
    return randomComputerSelection;
}

//plays a single round and produces round winner
function playRound(playerSelection) {
    let computersMove = computerSelection();
        if (
        (playerSelection === choiceRock && computersMove === choiceScissors) ||
        (playerSelection === choiceScissors && computersMove === choicePaper) ||
        (playerSelection === choicePaper && computersMove === choiceRock)) {
        document.querySelector("h2").innerHTML = `Player 1 wins! ${playerSelection.toUpperCase()} beats ${computersMove.toUpperCase()} `;
        document.querySelector(".p1-score").textContent = (playerOneScore++) + 1;
    } else if (
        (playerSelection === choiceRock && computersMove === choicePaper) ||
        (playerSelection === choiceScissors && computersMove === choiceRock) ||
        (playerSelection === choicePaper && computersMove === choiceScissors)) {
        document.querySelector("h2").innerHTML = `Computer wins! ${computersMove.toUpperCase()} beats ${playerSelection.toUpperCase()} `;
        document.querySelector(".p2-score").textContent = (playerTwoScore++) + 1;
    } else if (playerSelection === computersMove) {
        document.querySelector("h2").innerHTML = `Draw Game! ${playerSelection.toUpperCase()} vs ${computersMove.toUpperCase()} `;
}
winnerOutcome();
}

//targets button content to give clickable feature
var allButtons = document.querySelectorAll(".content");
allButtons.forEach(buttons => {
    buttons.addEventListener("click", getPlayerChoice); 
});

function getPlayerChoice(event){
    let playerSelection = (event.target.id);
    playRound(playerSelection);
}

function winnerOutcome() {
    let p1Score = playerOneScore;
    let p2Score = playerTwoScore;
    if (p1Score === 5) {
        document.querySelector(".final-winner").textContent = "Congratulations! You beat the computer!";
    }else if (p2Score === 5) {
        document.querySelector(".final-winner").textContent = "The computer has won! Resistance is futile!";
    } 
}

