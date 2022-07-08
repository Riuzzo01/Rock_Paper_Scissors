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
    let computerSelection = computerPlay();
    const compMove = document.querySelector(".compmove");
    compMove.textContent = "Computer choose " + computerSelection;
    let result = playRound(playerSelection, computerSelection);
    const score = document.createElement("div");
    if(result === 0) {
        score.textContent = "It's a tie! Score: Player " + playerScore + "-" + computerScore + " Computer";
    }
    else if(result === 1) {
        playerScore++;
        score.textContent = "Player win! Score: Player " + playerScore + "-" + computerScore + " Computer";
    }
    else {
        computerScore++;
        score.textContent = "Player lost! Score: Player " + playerScore + "-" + computerScore + " Computer";
    }
    compMove.appendChild(score);
    if(computerScore === 5 || playerScore === 5) {
        alert("Game Finished!!!")
    }
}

const btnPaper = document.getElementById('paper');
const btnRock = document.getElementById('rock');
const btnScissors = document.getElementById('scissors');

let playerScore = 0;
let computerScore = 0;

btnPaper.addEventListener('click', () => {game("paper");});
btnRock.addEventListener('click', () => {game("rock");});
btnScissors.addEventListener('click', () => {game("scissors");});

