// Allow the playerSelection to input their selection of either rock, paper, scissors ~~~~done~~~~
// Make playerSelection case-insensitive ~~~~done~~~~
// Let the computerPlay randomly select either rock, paper, scissors ~~~~done~~~~
// If playerSelection input is equal to rock while computerPlay is equal to scissors, "You won! Rock beats Scissors"; Save win info for playerScore ~~~~done~~~~
// If playerSelection input is equal to rock while computerPlay is equal to paper, "You lost! Paper beats Rock"; Save win info for computerScore ~~~~done~~~~
// If playerSelection input is equal to scissors while computerPlay is equal to rock, "You lost! Rock beats Scissors"; Save win info for computerScore ~~~~done~~~~
// If playerSelection input is equal to scissors while computerPlay is equal to paper, "You won! Scissors beat Paper"; Save win info for playerScore ~~~~done~~~~
// If playerSelection input is equal to paper while computerPlay is equal to rock, "You won! Paper beats Rock"; Save win info for playerScore ~~~~done~~~~
// If playerSelection input is equal to paper while computerPlay is equal to scissors, "You lost! Scissors beat Paper"; Save win info for computerScore ~~~~done~~~~
// If playerSelection input is equal to computerPlay "Tie game, Play again!"; Save win info both playerScore and computerScore ~~~~done~~~~
// Replay the game 5 
// if playerScore is less than computerScore, "The computer won!"
// if playerScore is more than computerScore, "The player won!"
// if playerScore is equal to computerScore, "Tie game. Play another 5 rounds"

let playerInput =  prompt("Choose Rock, Paper, or Scissors!");
let playerSelection = playerInput.toLowerCase();
const computerPlay = ['rock','paper','scissors'];

function computerSelection(){
    let options = computerPlay.length;
    let randomSelection = Math.floor(Math.random() * options);
    let randomComputerSelection = computerPlay[randomSelection];
    
    return randomComputerSelection;
}

function playRound(){
    if (playerSelection === 'rock' && computersMove === 'scissors'){
    return 'You won! Rock beats Scissors.';

}   else if (playerSelection === 'rock' && computersMove === 'paper'){
    return 'You lost! Paper beats Rock.';

}   else if (playerSelection === 'scissors' && computersMove === 'rock'){
    return 'You lost! Rock beats Scissors.';

}   else if (playerSelection === 'scissors' && computersMove === 'paper'){
    return 'You won! Scissors beats Paper.';

}   else if (playerSelection === 'paper' && computersMove === 'rock'){
    return 'You won! Paper beats Rock.';

}   else if (playerSelection === 'paper' && computersMove === 'scissors'){
    return 'You lost! Scissors beats Paper.';

}   else if (playerSelection === computersMove)
    return 'Tie game, play again';
}   

const computersMove = computerSelection();
console.log(playRound());


