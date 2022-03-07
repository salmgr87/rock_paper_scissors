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

function playRound() {
    let computerMove = computerPlay();
    console.log(computerMove);
    let humanMove = prompt("Rock, paper, or scissors?");
    console.log(humanMove);
    
    if (computerMove.toLowerCase() === humanMove.toLowerCase()){
        do {
            computerMove = computerPlay();
            console.log(computerMove);
            humanMove = prompt("Rock, paper, or scissors?");
        }
        while (computerMove.toLowerCase() === humanMove.toLowerCase());
    } 
    console.log("someone won");
   
}

playRound()