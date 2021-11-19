//1.	1 human input, 1 computer input.
//random integer between 0 and 2, no negatives

function randomNumber(min, max) {
  min = Math.ceil(0);
  max = Math.floor(3);
  return Math.floor(Math.random() * (max - min) + min);
}
function gameWin(playMove, compMove) {
  // supposed to give correct result when someone wins/loses
  if (playMove === compMove) {
    alert("It's a draw!");
  } else if (playMove === "paper" && compMove === "rock") {
    alert(`${playerName} wins!`);
    score++;
  } else if (playMove === "scissors" && compMove === "paper") {
    alert(`${playerName} wins!`);
    score++;
  } else if (playMove === "rock" && compMove === "scissors") {
    alert(`${playerName} wins!`);
    score++;
  } else if (playMove === "rock" && compMove === "paper") {
    alert("computer wins!");
    score - 1;
  } else if (playMove === "paper" && compMove === "scissors") {
    alert("computer wins!");
    score - 1;
  } else if (playMove === "scissors" && compMove === "rock") {
    alert("computer wins!");
    score - 1;
  }
  }

let playerName = prompt("What's your name?");
while (playerName.length > 10) {
  alert("Keep the message length to 10 chars or less");
  playerName = prompt("Please enter your name (Maximum limit 10)");
}
//playerName = playerName.substring(0, 10);
//if (!/^[A-Za-z][A-Za-z][A-Za-z].*/.exec(playerName)) {
//alert("Must be all letters!");
//}

let moveSet = ["rock", "paper", "scissors"];
let score = 0;
let totalScore = 0;

while (true) {
  let playMove = prompt("rock, paper, or scissors?");
  // randomNumber gives rock paper scissors as compMove
  {
    let compMove = randomNumber();
    compMove = moveSet[compMove];
    console.log("computer plays " + compMove);
    alert(`${playerName} has played ${playMove}, computer has played ${compMove}`);
    console.log(`${playerName} plays ${playMove}`);
    {
      gameWin(playMove, compMove);
      {
        result = totalScore++;
      }
      let keepPlaying = prompt(
        `Do you want to keep playing? y or n, you have played ${totalScore} games and your score is ${score}!`
      );
      if (keepPlaying === "y") {
      } else {
        alert("Thank you for playing.");
        break;
      }
    }
  }
}
// change player to user input of name

//2.	3 options, randomised for the comp
//a.	Print comp at same time as player chooses
//b.	1,2,3 for inputs for player

//3.	Function run at end to check winner, once both moves have been shown.

//1.	Ask name at start of page

//2.	Prompt, 1 for rock, 2 for scissors, 3 for paper.

//3.	Check if both chose same, restart. Max 3 times

//4.	Alert saying who wins
