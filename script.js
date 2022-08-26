var choiceRock = "Rock";
var choicePaper = "Paper";
var choiceScissors = "Scissors";
var playerOneScore = 0;
var playerTwoScore = 0;

function computerSelection() {
    let computerPlay = [choiceRock, choicePaper, choiceScissors];
    let randomSelection = Math.floor(Math.random() * computerPlay.length);
    let randomComputerSelection = computerPlay[randomSelection];
    
    return randomComputerSelection;
}

function playRound(playerSelection) {
    let computersMove = computerSelection();
        if (
        (playerSelection === choiceRock && computersMove === choiceScissors) ||
        (playerSelection === choiceScissors && computersMove === choicePaper) ||
        (playerSelection === choicePaper && computersMove === choiceRock)) {
        document.querySelector("h2").innerHTML = `Player 1 wins! ${playerSelection.toUpperCase()} beats ${computersMove.toUpperCase()} `;
        document.querySelector(".p1-score").textContent = playerOneScore++;
    } else if (
        (playerSelection === choiceRock && computersMove === choicePaper) ||
        (playerSelection === choiceScissors && computersMove === choiceRock) ||
        (playerSelection === choicePaper && computersMove === choiceScissors)) {
        document.querySelector("h2").innerHTML = `Player 2 wins! ${computersMove.toUpperCase()} beats ${playerSelection.toUpperCase()} `;
        document.querySelector(".p2-score").textContent = playerOneScore++;
    } else if (playerSelection === computersMove) {
        document.querySelector("h2").innerHTML = `Draw Game! ${playerSelection.toUpperCase()} vs ${computersMove.toUpperCase()} `;
}
}
var allButtons = document.querySelectorAll(".content");

allButtons.forEach(buttons => {
    buttons.addEventListener("click", getPlayerChoice); 
});

function getPlayerChoice(event){
    let playerSelection = (event.target.id);
    playRound(playerSelection);
}

// function game() {
//     var resultsArray = [];
//     for (let i = 0; i < 5; i++) {
//         var result = playRound();
//         resultsArray.push(result);
//         console.log(result);
//     }
//     console.log(resultsArray);}
