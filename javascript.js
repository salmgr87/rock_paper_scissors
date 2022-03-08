/*
computerPlay will be the fuction that determines what the computer's move is.
I will generate a random number 0, 1, or 2, then use that to choose a word from the array containing
Rock, Paper, or Scissors.
*/
function computerPlay() {
    const moves = ["rock", "paper", "scissors"]
    const computerMove = Math.floor(Math.random()*3);
    let finalMove = moves[computerMove];
    return finalMove;
}

/*
playRound will play one round.
It needs to call computerPlay()
It needs to ask the player for their move.
Then compares the two, and declares a winner.
If the round is a tie, then it runs computerPlay() and asks the player again
*/

function playRound(playerSelection, computerSelection) {
    let computerMove = computerSelection;
    console.log(computerMove);
    let humanMove = playerSelection;
    console.log(humanMove);

    /* Check to make sure human move is rock, paper, or scissors */
    if ((humanMove.toLowerCase() !== "rock") && (humanMove.toLowerCase() !== "paper") && (humanMove.toLowerCase() !== "scissors")) {
        do {
            humanMove = prompt("Not a valid selection. Please type rock, paper, or scissors.");
        }
        while ((humanMove.toLowerCase() !== "rock") && (humanMove.toLowerCase() !== "paper") && (humanMove.toLowerCase() !== "scissors"));
    }
    
    /* Tiebreaker */
    if (computerMove === humanMove.toLowerCase()){
        do {
            computerMove = computerPlay();
            console.log(computerMove);
            humanMove = prompt("It's a tie. Choose again. Rock, paper, or scissors?");

            /* Check to see if human move is rock, paper, or scissors */
            if ((humanMove.toLowerCase() !== "rock") && (humanMove.toLowerCase() !== "paper") && (humanMove.toLowerCase() !== "scissors")) {
                do {
                    humanMove = prompt("Not a valid selection. Please type rock, paper, or scissors.");
                }
                while ((humanMove.toLowerCase() !== "rock") && (humanMove.toLowerCase() !== "paper") && (humanMove.toLowerCase() !== "scissors"));
            }

        }
        while (computerMove === humanMove.toLowerCase());
    } 


    /* Declare the winner */
    if ((humanMove.toLowerCase() === "rock") && (computerMove === "scissors")) {
        return "You win! Rock beats scissors!";
    } else if ((humanMove.toLowerCase() === "scissors") && (computerMove === "paper")) {
        return "You win! Scissors beat paper!";
    } else if ((humanMove.toLowerCase() === "paper") && (computerMove === "rock")) {
        return "You win! Paper beats rock!";
    } else if ((humanMove.toLowerCase() === "rock") && (computerMove === "paper")) {
        return "You lose! Paper beats rock!";
    } else if ((humanMove.toLowerCase() === "paper") && (computerMove === "scissors")) {
        return "You lose! Scissors beat paper!";
    } else if ((humanMove.toLowerCase() === "scissors") && (computerMove === "rock")) {
        return "You lose! Rock beats scissors!";
    }

   
}

/*let result;
result = playRound(prompt("Rock, paper, or scissors?"), computerPlay());
result;
if (result.includes("win")) {console.log("You won the game!")};
if (result.includes("lose")) {console.log("You lost the game!")}; */

/* The game() function should call playRound() 5 times.
playRound should be changed to return the results, instead of console.log the results.
Use text.include(win) or lose to help tally the score.
Report the score after each round?
Report the winner at the end of 5 rounds
*/

let humanScore = 0;
let computerScore = 0;

function game() {
    for (i = 0; i < 5; i++) {
        let result = playRound(prompt("Rock, paper, or scissors?"), computerPlay());
        if (result.includes("win")) {
            console.log("You won this round!");
            humanScore++;
            console.log(`After round ${i+1}...`)
            console.log("Human score: " + humanScore);
            console.log("Computer score: " + computerScore);
        }
        if (result.includes("lose")) {
            console.log("You lost this round!");
            computerScore++;
            console.log(`After round ${i+1}...`)
            console.log("Human score: " + humanScore);
            console.log("Computer score: " + computerScore);
        }
        
    }
}


game();