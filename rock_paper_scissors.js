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

//The function below return 0 if there is a tie, -1 if player has lost and 1 if player has won
function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock") {
        if(computerSelection === "rock") {
            return 0;
        }
        else if(computerSelection === "paper") {
            return -1;
        }
        else {
            return 1;
        }
    }
    else if(playerSelection.toLowerCase() === "paper") {
        if(computerSelection === "paper") {
            return 0;
        }
        else if(computerSelection === "rock") {
            return 1;
        }
        else {
            return -1;
        }
    }
    else  {
        if(computerSelection === "paper") {
            return 1;
        }
        else if(computerSelection === "rock") {
            return -1;
        }
        else {
            return 0;
        }
    }
}

function game(playerSelection) {
    let playerScore = 0;
    let computerScore = 0;
    let computerSelection = computerPlay();
    console.log("Computer choosed ", computerSelection);
    let result = playRound(playerSelection, computerSelection);
    if(result === 0) {
       console.log("It's a tie! Score: Player ", playerScore, "-", computerScore, " Computer");
    }
    else if(result === 1) {
        playerScore++;
        console.log("Player win! Score: Player", playerScore, "-", computerScore, " Computer");
    }
    else {
        computerScore++;
        console.log("Player lost! Score: Player", playerScore, "-", computerScore, " Computer");
    }
    if(computerScore === 3) {
        console.log("Game has end! Computer is the winner!!! Score: Player ", playerScore, "-", computerScore, " Computer");
        return;
    }
    if(playerScore === 3) {
        console.log("Game has end! Player is the winner!!! Score: Player ", playerScore, "-", computerScore, " Computer");
        return;
    }
    console.log("Game has end! Score: ", playerScore, "-", computerScore, " Computer")
}

const btnPaper = document.getElementById('paper');
const btnRock = document.getElementById('rock');
const btnScissors = document.getElementById('scissors');

btnPaper.addEventListener('click', () => {game("paper");});
btnRock.addEventListener('click', () => {game("rock");});
btnScissors.addEventListener('click', () => {game("scissors");});

