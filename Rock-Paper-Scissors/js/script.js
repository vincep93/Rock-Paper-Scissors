const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let playerScore = 0;
let computerScore= 0;

function pickRock() {
    playerSelection = "rock";

    function computerSelect() {
    
        let words = ["rock", "paper", "scissors"];
        let randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }
    
    let randomChoice = computerSelect();
    console.log(randomChoice);

    document.getElementById('1').onclick = pickRock;
    
    if (playerSelection === randomChoice) {
        alert('its a tie')
        return;     
    } else if (playerSelection === rock && randomChoice === paper) {
        alert ("Paper beats Rock. You lose.")
        computerScore++;
        updateComputerScoreInHTML();
        return;
    } else (playerSelection === rock && randomChoice === scissors) 
        alert ("Rock beats Scissors. You win.")
        playerScore++;
        updatePlayerScoreInHTML();
        return;
}

function pickPaper() {
    playerSelection = "paper";

    document.getElementById('2').onclick = pickPaper;

    function computerSelect() {
    
        let words = ["rock", "paper", "scissors"];
        let randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }
    
    let randomChoice = computerSelect();
    console.log(randomChoice);

    if (playerSelection === randomChoice) {
        alert('its a tie')
        return;     
    } else if (playerSelection === paper && randomChoice === rock) {
        alert ("Paper beats Rock. You win.")
        playerScore +=1;
        updatePlayerScoreInHTML();
        return;
    } else (playerSelection === paper && randomChoice === scissors) 
        alert ("Scissors beats Paper. You lose.")
        computerScore +=1;
        updateComputerScoreInHTML();
        return;

}

function pickScissors() {
    playerSelection = "scissors";

    document.getElementById('3').onclick = pickScissors;

    function computerSelect() {
    
        let words = ["rock", "paper", "scissors"];
        let randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }
    
    let randomChoice = computerSelect();
    console.log(randomChoice);

    if (playerSelection === randomChoice) {
        alert('its a tie')
        return;     
    } else if (playerSelection === scissors && randomChoice === rock) {
        alert ("Rock beats Scissors. You lose.")
        computerScore +=1;
        updateComputerScoreInHTML();
        return;
    } else (playerSelection === scissors && randomChoice === paper) 
        alert ("Scissors beats Paper. You win.")
        playerScore +=1;
        updatePlayerScoreInHTML();
        return;

}

function updatePlayerScoreInHTML() {
    document.getElementById("PlayerScore").innerText = playerScore;
}

function updateComputerScoreInHTML() {
    document.getElementById("ComputerScore").innerText = computerScore;
}