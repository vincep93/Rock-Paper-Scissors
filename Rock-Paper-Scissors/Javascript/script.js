//make a value for Rock. Make value greater than Scissors.
//make a value for Scissors. Make value greater than Paper.
//make a value for Paper. Make value greater than Rock.

//create a function for the computer to select a value randomly 

//create a function that takes two parameters and returns a srting that declares a winner or tie

//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

//Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end.



const Rock = 0;
const Paper = 1;
const Scissors =2;


function computerSelect(randomChoice);

let randomChoice = Math.floor(Math.random()* Array );
    if (randomChoice === 2) {
        return choice (2);
    } else if (randomChoice === 1) {
        return choice(1);
    } else (randomChoice === 0) {
        return choice (0);
    }




function playRound(playerSelection, computerSelection) {
    // your code here!

// player - computer tie here 
if (playerSelection === Rock && computerSelect === Rock) {
    return prompt("Its a Tie. Pick again!");
} else if {
    (playerSelection === Paper && computerSelect === Paper) {
        return prompt("Its a Tie. Pick again!");
} else if {
    (playerSelection === Scissors && computerSelect === SCissors) {
            return prompt("Its a Tie. Pick again!");
    }
}
}



//use this code for a tie instead!!!!!!
// if (playerSelection === computerSelection) {
//    return('its a tie');
        
//   } 





//player loss
    if (playerSelection === Rock && computerSelect === Paper) {
        return prompt("Paper beats Rock. You lose.")
    } else if {
        playerSelection = Paper, computerSelect = Scissors {
            return prompt("Scissors beats Paper. You lose.")
        }
    } else if {
        (playerSelection === Scissors && computerSelect === Scisors) {
            return prompt("Its a Tie. Pick again!")
    }
  }
  

//player win
  if (playerSelection === Rock && computerSelect === Scissors) {
        return prompt ()
  }
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  