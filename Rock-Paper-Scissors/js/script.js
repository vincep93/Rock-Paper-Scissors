//make a value for Rock. Make value greater than Scissors.
//make a value for Scissors. Make value greater than Paper.
//make a value for Paper. Make value greater than Rock.

//create a function for the computer to select a value randomly 

//create a function that takes two parameters and returns a srting that declares a winner or tie

//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

//Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end.



const rock = 1;
const paper = 2;
const scissors = 3;


const playerSelection = "rock" || "paper" || "scissors";
// should this be const playerSelection = 0 || 1 || 2; ?????


//let computerSelect = randomChoice;
//function computerSelect(randomChoice);

//Note from Discord - ur function i.e: (Math.floor(Math.random() * 3))) executes and returns a random value which is stored into the randomChoice variable. So, it always uses that value unless u re-assign it 🤔 

//for function computerSelect(randomChoice) I think i need to put in the play function after it and tie it to the player choice to get this to work ie: function computerSelect(randomChoice) {if (computerSelect = 0) return Rock}



function computerSelect() {
    // Array containing the words
    let words = ["rock", "paper", "scissors"];

    // Generate a random index to select a word from the array
    let randomIndex = Math.floor(Math.random() * words.length);

    // Return the word at the randomly generated index
    return words[randomIndex];
}

// Example usage:
let randomChoice = computerSelect();
console.log(randomChoice);




function pickRock(playerSelection = rock, randomChoice) {

    document.getElementById('1').onclick = pickRock;

    
    
    if (playerSelection === randomChoice) {
        alert('its a tie');     
    } else if (playerSelection === rock && randomChoice === paper) {
        alert ("Paper beats Rock. You lose.")
    } else (playerSelection === rock && randomChoice === scissors) 
        alert ("Rock beats Scissors. You win.")
}

function pickPaper(playerSelection = paper, computerSelect) {

    document.getElementById('2').onclick = pickPaper;

    if (playerSelection === computerSelect) {
        alert('its a tie');     
    } else if (playerSelection === paper && computerSelect === rock) {
        alert ("Paper beats Rock. You win.")
    } else (playerSelection === paper && computerSelect === scissors) 
        alert ("Scissors beats Paper. You lose.")

}

function pickScissors(playerSelection = scissors, computerSelect) {

    document.getElementById('3').onclick = pickPaper;

    if (playerSelection === computerSelect) {
        alert('its a tie');     
    } else if (playerSelection === scissors && computerSelect === rock) {
        alert ("Rock beats Scissors. You lose.")
    } else (playerSelection === scissors && computerSelect === scissors) 
        alert ("Scissors beats Paper. You win.")

}
