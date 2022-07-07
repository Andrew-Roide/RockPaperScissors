/* Allow the playerSelection to input their selection of either rock, paper, scissors ~~~~done~~~~
Make playerSelection case-insensitive ~~~~done~~~~
Let the computerPlay randomly select either rock, paper, scissors ~~~~done~~~~
If playerSelection input is equal to rock while computerPlay is equal to scissors, "You won! Rock beats Scissors"; Save win info for playerScore ~~~~done~~~~
If playerSelection input is equal to rock while computerPlay is equal to paper, "You lost! Paper beats Rock"; Save win info for computerScore ~~~~done~~~~
If playerSelection input is equal to scissors while computerPlay is equal to rock, "You lost! Rock beats Scissors"; Save win info for computerScore ~~~~done~~~~
If playerSelection input is equal to scissors while computerPlay is equal to paper, "You won! Scissors beat Paper"; Save win info for playerScore ~~~~done~~~~
If playerSelection input is equal to paper while computerPlay is equal to rock, "You won! Paper beats Rock"; Save win info for playerScore ~~~~done~~~~
If playerSelection input is equal to paper while computerPlay is equal to scissors, "You lost! Scissors beat Paper"; Save win info for computerScore ~~~~done~~~~
If playerSelection input is equal to computerPlay "Tie game, Play again!"; Save win info both playerScore and computerScore ~~~~done~~~~
Replay the game 5 
if playerScore is less than computerScore, "The computer won!"
if playerScore is more than computerScore, "The player won!"
if playerScore is equal to computerScore, "Tie game. Play another 5 rounds"
*/

let playerInput =  prompt("Choose Rock, Paper, or Scissors!");
let playerSelection = playerInput.toLowerCase();
const computerPlay = ["rock","paper","scissors"];

function computerSelection(){
    let options = computerPlay.length;
    let randomSelection = Math.floor(Math.random() * options);
    let randomComputerSelection = computerPlay[randomSelection];
    
    return randomComputerSelection;
}

 /*
        1. Fix opening all opening curly braces. need a space between ending ) and {
        2. Change all hard coded strings ("rock", "scissors", "paper") to variables and use those variables throughout the code.
            This makes it so if they ever need to change you can just update it once and not in 100 other places. More maintainability.
        3. Can you create a function that replaces all the if statements below. It should take in the playerSelection and computersMove as inputs and return a string (the message to display to the user)
            This will reduce the duplicated code so you don't have to have 4 different "You won!" and "You lost!" lines. Makes the code cleaner.
        4. If you wanted another function to generate the message to the user I like that too. It should take in the winner and loser as input and generate a string
            (This slightly changes what I said in #3)
    */

function playRound() {
    var choiceRock = "rock";
    var choicePaper = "paper";
    var choiceScissors = "scissors";
    
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

const computersMove = computerSelection();
console.log(playRound());