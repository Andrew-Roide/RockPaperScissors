var choiceRock = "Rock";
var choicePaper = "Paper";
var choiceScissors = "Scissors";

function computerSelection() {
    let computerPlay = [choiceRock, choicePaper, choiceScissors];
    let randomSelection = Math.floor(Math.random() * computerPlay.length);
    let randomComputerSelection = computerPlay[randomSelection];
    
    return randomComputerSelection;
}

function playRound() {
    let computersMove = computerSelection();
    let playerSelection = choiceRock || choicePaper || choiceScissors;
    if (
        (playerSelection === choiceRock && computersMove === choiceScissors) ||
        (playerSelection === choiceScissors && computersMove === choicePaper) ||
        (playerSelection === choicePaper && computersMove === choiceRock)) {
        document.querySelector("h2").innerHTML = `Player 1 wins! ${playerSelection.toUpperCase()} beats ${computersMove.toUpperCase()} `;
    } else if (
        (playerSelection === choiceRock && computersMove === choicePaper) ||
        (playerSelection === choiceScissors && computersMove === choiceRock) ||
        (playerSelection === choicePaper && computersMove === choiceScissors)) {
        document.querySelector("h2").innerHTML = `Player 2 wins! ${computersMove.toUpperCase()} beats ${playerSelection.toUpperCase()} `;
    } else if (playerSelection === computersMove) {
        document.querySelector("h2").innerHTML = `Draw Game! ${playerSelection.toUpperCase()} vs ${computersMove.toUpperCase()} `;
}
}

var allButtons = document.querySelectorAll(".selection");

allButtons.forEach(buttons => {
    buttons.addEventListener("click", HandelClick); 
});

function HandelClick(){
    var buttonInnerHtml = this.innerHtml;
    playRound(buttonInnerHtml);
}



// function game() {
//     var resultsArray = [];
//     for (let i = 0; i < 5; i++) {
//         var result = playRound();
//         resultsArray.push(result);
//         console.log(result);
//     }
//     console.log(resultsArray);
// }
