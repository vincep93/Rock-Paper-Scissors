//make a value for Rock. Make value greater than Scissors.
//make a value for Scissors. Make value greater than Paper.
//make a value for Paper. Make value greater than Rock.

//create a function for the computer to select a value randomly 

//create a function that takes two parameters and returns a srting that declares a winner or tie

//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

//Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end.



const Rock = 0;
const Paper = 1;
const Scissors = 2;

let computerSelect = randomChoice;
let randomChoice = Math.floor(Math.random() * 3);
function computerSelect(randomChoice);

//ur function i.e: (Math.floor(Math.random() * 3))) executes and returns a random value which is stored into the randomChoice variable. So, it always uses that value unless u re-assign it 🤔 

//now that im thinking about it. I dont think that we need to return a value more than once. we just need the code to run again while maintaing the score. hmmmm

//for function computerSelect(randomChoice) I think i need to put in the play function after it and tie it to the player choice to get this to work ie: function computerSelect(randomChoice) {if (computerSelect = 0) return Rock}




//code for buttons
//document.getElementById('YourID').onclick = nameOfFunctionToBeCalled;


function playRound(playerSelection, computerSelection) {
    // your code here!

// player - computer tie here 

 if (playerSelection === computerSelection) {
    alert('its a tie');     
} 

//player loss
    if (playerSelection === Rock && computerSelect === Paper) {
            alert ("Paper beats Rock. You lose.")
    } else if {playerSelection = Paper, computerSelect = Scissors
        alert("Scissors beats Paper. You lose.")
    } else {
        (playerSelection === Scissors && computerSelect === Rock) 
            alert ("Rock beats Scissors. You Lose.")
    }
  

//player win
if (playerSelection === Rock && computerSelect === Scissors) {
        alert ("Rock beats Scissors. You win.")
} else if { (playerSelection === Paper && computerSelect === Rock)
    alert ("Paper beats Rock. You win.")
} else { (playerSelection === Scissors && computerSelect === Paper)
        alert ("Scissors beats Paper. You win.")}
}

  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  