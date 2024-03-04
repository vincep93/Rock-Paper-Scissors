//make a value for Rock. Make value greater than Scissors.
//make a value for Scissors. Make value greater than Paper.
//make a value for Paper. Make value greater than Rock.

//create a function for the computer to select a value randomly 

//create a function that takes two parameters and returns a srting that declares a winner or tie

//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

//Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end.






//Note from Discord - ur function i.e: (Math.floor(Math.random() * 3))) executes and returns a random value which is stored into the randomChoice variable. So, it always uses that value unless u re-assign it 🤔 

//for function computerSelect(randomChoice) I think i need to put in the play function after it and tie it to the player choice to get this to work ie: function computerSelect(randomChoice) {if (computerSelect = 0) return Rock}





const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let playerScore = 0;
let computerScore= 0;


//const playerSelection = "rock" || "paper" || "scissors";


function computerSelect() {
    
    let words = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

let randomChoice = computerSelect();
console.log(randomChoice);

function pickRock() {
    playerSelection = "rock";

    document.getElementById('1').onclick = pickRock;
    
    if (playerSelection === randomChoice) {
        alert('its a tie')
        return;     
    } else if (playerSelection === rock && randomChoice === paper) {
        alert ("Paper beats Rock. You lose.")
        computerScore++;
        return;
    } else (playerSelection === rock && randomChoice === scissors) 
        alert ("Rock beats Scissors. You win.")
        playerScore++;
        return;
}

function pickPaper() {
    playerSelection = "paper";

    document.getElementById('2').onclick = pickPaper;

    if (playerSelection === randomChoice) {
        alert('its a tie')
        return;     
    } else if (playerSelection === paper && randomChoice === rock) {
        alert ("Paper beats Rock. You win.")
        playerScore +=1;
        return;
    } else (playerSelection === paper && randomChoice === scissors) 
        alert ("Scissors beats Paper. You lose.")
        computerScore +=1;
        return;

}

function pickScissors() {
    playerSelection = "scissors";

    document.getElementById('3').onclick = pickScissors;

    if (playerSelection === randomChoice) {
        alert('its a tie')
        return;     
    } else if (playerSelection === scissors && randomChoice === rock) {
        alert ("Rock beats Scissors. You lose.")
        computerScore +=1;
        return;
    } else (playerSelection === scissors && randomChoice === paper) 
        alert ("Scissors beats Paper. You win.")
        playerScore +=1;
        return;

}
