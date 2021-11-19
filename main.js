console.log("check")

//1.	1 human input, 1 computer input.
//random integer between 0 and 2, no negatives

function randomNumber(min, max) {
    return Math.floor(Math.random() * (min - max)) + min;
  };

const moveSet = ["rock", "paper", "scissors"]

let playMove = prompt("rock, paper, or scissors?")
let compMove = randomNumber (0,2)
    console.log (moveSet[randomNumber]) 
    console.log (compMove)
;

if (playMove === compMove) {
    console.log ("It's a draw!")
} else if (playMove = "paper", compMove = "rock") {
console.log ("player wins!")
} else if (playMove = "scissors", compMove = "paper") {
    console.log ("player wins!")
} else if (playMove = "rock", compMove = "scissors") {
    console.log ("player wins!")
} else if (playMove = "rock", compMove = "paper") {
    console.log ("computer wins!")
} else if (playMove = "paper", compMove = "scissors") {
    console.log ("computer wins!")
} else if (playMove = "scissors", compMove = "rock") {
    console.log ("computer wins!")
};

// change player to user input of name
  
//2.	3 options, randomised for the comp
//a.	Print comp at same time as player chooses
//b.	1,2,3 for inputs for player

//3.	Function run at end to check winner, once both moves have been shown.


//1.	Ask name at start of page

//2.	Prompt, 1 for rock, 2 for scissors, 3 for paper.

//3.	Check if both chose same, restart. Max 3 times

//4.	Alert saying who wins
