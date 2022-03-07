/*
computerPlay will be the fuction that determines what the computer's move is.
I will generate a random number 0, 1, or 2, then use that to choose a word from the array containing
Rock, Paper, or Scissors.
*/
function computerPlay() {
    const moves = ["rock", "paper", "scissors"]
    const computerMove = Math.floor(Math.random()*3);
    console.log(moves[computerMove]);
}

