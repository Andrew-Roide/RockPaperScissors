var choiceRock = "rock";
var choicePaper = "paper";
var choiceScissors = "scissors";

function computerSelection() {
    let computerPlay = [choiceRock, choicePaper, choiceScissors];
    let randomSelection = Math.floor(Math.random() * computerPlay.length);
    let randomComputerSelection = computerPlay[randomSelection];
    
    return randomComputerSelection;
}

function playRound() {
    let playerInput =  prompt("Choose Rock, Paper, or Scissors!");
    let playerSelection = playerInput.toLowerCase();
    let computersMove = computerSelection();

    if (
        (playerSelection === choiceRock && computersMove === choiceScissors) ||
        (playerSelection === choiceScissors && computersMove === choicePaper) ||
        (playerSelection === choicePaper && computersMove === choiceRock)) {
        return `You won! ${playerSelection.toUpperCase()} beats ${computersMove.toUpperCase()}.`;
    } else if (
        (playerSelection === choiceRock && computersMove === choicePaper) ||
        (playerSelection === choiceScissors && computersMove === choiceRock) ||
        (playerSelection === choicePaper && computersMove === choiceScissors)) {
        return `You lost! ${computersMove.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;  
    } else if (playerSelection === computersMove) {
        return "Tie game, Play again.";
}
}

function game() {
    var resultsArray = [];
    for (let i = 0; i < 5; i++) {
        var result = playRound();
        resultsArray.push(result);
        console.log(result);
    }
    console.log(resultsArray);
}

game();