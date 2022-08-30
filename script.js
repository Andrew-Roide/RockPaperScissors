var choiceRock = "Rock";
var choicePaper = "Paper";
var choiceScissors = "Scissors";
var playerOneScore = 0;
var playerTwoScore = 0;
var numberOfRounds = 5;

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
    let roundWinnerMessage = document.getElementById("winnerMessage");
    let p1WinnerMessage = `Player 1 wins! ${playerSelection.toUpperCase()} beats ${computersMove.toUpperCase()} `;
    let p2WinnerMessage = `Computer wins! ${computersMove.toUpperCase()} beats ${playerSelection.toUpperCase()} `;
    let drawGameMessage = `Draw Game! ${playerSelection.toUpperCase()} vs ${computersMove.toUpperCase()} `;
    if (
        (playerSelection === choiceRock && computersMove === choiceScissors) ||
        (playerSelection === choiceScissors && computersMove === choicePaper) ||
        (playerSelection === choicePaper && computersMove === choiceRock)) {
        roundWinnerMessage.innerHTML = p1WinnerMessage;
        document.querySelector(".p1-score").textContent = (playerOneScore++) + 1;
    } else if (
        (playerSelection === choiceRock && computersMove === choicePaper) ||
        (playerSelection === choiceScissors && computersMove === choiceRock) ||
        (playerSelection === choicePaper && computersMove === choiceScissors)) {
        roundWinnerMessage.innerHTML = p2WinnerMessage;
        document.querySelector(".p2-score").textContent = (playerTwoScore++) + 1;
    } else if (playerSelection === computersMove) {
        roundWinnerMessage.innerHTML = drawGameMessage;
}
    displayFinalMessage();
}

//targets button content to give clickable feature
var allButtons = document.querySelectorAll(".content");
allButtons.forEach(buttons => {
    buttons.addEventListener("click", getPlayerChoice); 
});

function getPlayerChoice(){
    let playerSelection = this.getAttribute("data-playerChoices");
    playRound(playerSelection);
}

// displays final round message who reached numberOfRounds first
function displayFinalMessage() {
    let p1Score = playerOneScore;
    let p2Score = playerTwoScore;
    let finalWinnerMessage = document.querySelector(".final-winner");
    if (p1Score === numberOfRounds) {
        finalWinnerMessage.textContent = "Congratulations! You beat the computer!";
    } else if (p2Score === numberOfRounds) {
        finalWinnerMessage.textContent = "The computer has won! Resistance is futile!";
    } 
}
