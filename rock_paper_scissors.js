function computerPlay() {
    let rand;
    rand = Math.floor(Math.random() * 3);
    if(rand === 0) {
        return "Rock";
    }
    if(rand === 1) {
        return "Paper";
    }
    if(rand === 2) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.localeCompare("Rock")) {
        if(computerSelection === "Rock") {
            return "Tie";
        }
        else if(computerSelection === "Paper") {
            return "Lost";
        }
        else {
            return "Win";
        }
    }
    else if(playerSelection.localeCompare("Paper")) {
        if(computerSelection === "Paper") {
            return "Tie";
        }
        else if(computerSelection === "Rock") {
            return "Win";
        }
        else {
            return "Lost";
        }
    }
    else {
        if(computerSelection === "Paper") {
            return "Win";
        }
        else if(computerSelection === "Rock") {
            return "Lost";
        }
        else {
            return "Tie";
        }
    }
}

const playerSelection = "rock";
console.log(playRound(playerSelection, computerPlay()));