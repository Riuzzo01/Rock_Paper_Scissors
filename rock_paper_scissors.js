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
    const move = document.querySelector("#" + computerSelection + "Computer");
    move.setAttribute("style", "background-color: gold");
    
    if(computerSelection === "rock") {
        const paper = document.querySelector("#paperComputer");
        const scissors = document.querySelector("#scissorsComputer");
        paper.setAttribute("style", "background-color: none");
        scissors.setAttribute("style", "background-color: none");
    }
    
    if(computerSelection === "paper") {
        const rock = document.querySelector("#rockComputer");
        const scissors = document.querySelector("#scissorsComputer");
        rock.setAttribute("style", "background-color: none");
        scissors.setAttribute("style", "background-color: none");
    }

    if(computerSelection === "scissors") {
        const paper = document.querySelector("#paperComputer");
        const rock = document.querySelector("#rockComputer");
        paper.setAttribute("style", "background-color: none");
        rock.setAttribute("style", "background-color: none");
    }

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
    if(computerScore === 5) {
        score.textContent = "Game Finished!! Computer Wins!!";
        playerScore = 0;
        computerScore = 0;
    }
    if(playerScore === 5) {
        score.textContent = "Game Finished!! Player Wins!!";
        playerScore = 0;
        computerScore = 0;
    }
}

const btnPaper = document.getElementById('paperPlayer');
const btnRock = document.getElementById('rockPlayer');
const btnScissors = document.getElementById('scissorsPlayer');

let playerScore = 0;
let computerScore = 0;

btnPaper.addEventListener('click', () => {game("paper");});
btnRock.addEventListener('click', () => {game("rock");});
btnScissors.addEventListener('click', () => {game("scissors");});


