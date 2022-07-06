function computerPlay() {
    let rand;
    rand = Math.floor(Math.random() * 3);
    if(rand === 0) {
        return "rock";
    }
    if(rand === 1) {
        return "paper";
    }
    if(rand === 2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock") {
        if(computerSelection === "rock") {
            return "It's a tie! Either Player and Computer played Rock!";
        }
        else if(computerSelection === "paper") {
            return "Player losts! Paper beats Rock!";
        }
        else {
            return "Player wins! Rock beats Scissors!";
        }
    }
    else if(playerSelection.toLowerCase() === "paper") {
        if(computerSelection === "paper") {
            return "It's a tie! Either Player and Computer played Paper!";
        }
        else if(computerSelection === "rock") {
            return "Player wins! Paper beats Rock!";
        }
        else {
            return "Player losts! Scissors beats Paper!";
        }
    }
    else  {
        if(computerSelection === "paper") {
            return "Player wins! Scissors beats Paper!";
        }
        else if(computerSelection === "rock") {
            return "Player losts! Rock beats Scissors!";
        }
        else {
            return "It's a tie! Either Player and Computer played Scissors!";
        }
    }
}

let playerSelection = prompt("Choose your move: ");
let computerSelection = computerPlay();
console.log("Computer choosed ", computerSelection);
console.log(playRound(playerSelection, computerSelection));