//make a value for Rock. Make value greater than Scissors.
//make a value for Scissors. Make value greater than Paper.
//make a value for Paper. Make value greater than Rock.

//create a function for the computer to select a value randomly 

//create a function that takes two parameters and returns a srting that declares a winner or tie

//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

//Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end.



const rock = 0;
const paper = 1;
const scissors = 2;

//const rock = document.getElementById("rock");
    //rock.addEventListener("click") 
        //console.log("rock")
    //;





const playerSelection = "rock" || "paper" || "scissors";
// should this be const playerSelection = 0 || 1 || 2; ?????

let randomChoice = Math.floor(Math.random() * 3);
let computerSelect = randomChoice;
//function computerSelect(randomChoice);

//Note from Discord - ur function i.e: (Math.floor(Math.random() * 3))) executes and returns a random value which is stored into the randomChoice variable. So, it always uses that value unless u re-assign it 🤔 

//now that im thinking about it. I dont think that we need to return a value more than once. we just need the code to run again while maintaing the score. hmmmm

//for function computerSelect(randomChoice) I think i need to put in the play function after it and tie it to the player choice to get this to work ie: function computerSelect(randomChoice) {if (computerSelect = 0) return Rock}




//code for buttons
//document.getElementById('YourID').onclick = nameOfFunctionToBeCalled;


//$("rock-button").click(function() {
//   var fired_button = $(this).val();
//    alert(fired_button);
//});

//if click rock button then playerSelection === rock

//else if click paper button then playerSelection === paper

//else if click scissors button then playerSelection === scissors




function playRock(playerSelection = rock, computerSelect) {

    document.getElementById('rock').onclick = playRock;

    if (playerSelection === computerSelect) {
        alert('its a tie');     
    } else if (playerSelection === rock && computerSelect === paper) {
        alert ("Paper beats Rock. You lose.")
    } else (playerSelection === rock && computerSelect === scissors) 
        alert ("Rock beats Scissors. You win.")
}







function playRound(playerSelection, computerSelect) {
    // your code here!

// player - computer tie here 

 if (playerSelection === computerSelect) {
    alert('its a tie');     
} 

//player loss
    if (playerSelection === rock && computerSelect === paper) {
            alert ("Paper beats Rock. You lose.");
    } else if (playerSelection = paper, computerSelect = scissors) { 
        alert("Scissors beats Paper. You lose.");
    } else (playerSelection === scissors && computerSelect === rock); {
            alert ("Rock beats Scissors. You Lose.");
    }
  

//player win
if (playerSelection === rock && computerSelect === scissors) {
        alert ("Rock beats Scissors. You win.")
} else if (playerSelection === paper && computerSelect === rock) { 
    alert ("Paper beats Rock. You win.")
} else (playerSelection === scissors && computerSelect === paper); { 
        alert ("Scissors beats Paper. You win.")}
}

  
  
  
  //console.log(playRound(playerSelection, computerSelect));
  