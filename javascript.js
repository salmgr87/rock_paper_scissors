let humanScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');


const rockClicked = document.querySelector('#rock');
rockClicked.addEventListener('click', function (e) {
    playGame('rock');
});

const paperClicked = document.querySelector('#paper');
paperClicked.addEventListener('click', function (e) {
    playGame('paper');
});

const scissorsClicked = document.querySelector('#scissors');
scissorsClicked.addEventListener('click', function (e) {
    playGame('scissors');
});


function computerPlay() {
    const moves = ["rock", "paper", "scissors"]
    const computerMove = Math.floor(Math.random()*3);
    let finalMove = moves[computerMove];
    return finalMove;
}


function playGame(selection) {
    let computerMove = computerPlay();
    console.log(`The human played ${selection}`);
    console.log(`The computer played ${computerMove}`);
    if (selection == computerMove) {
        console.log("It's a tie. Play again.");
    } else if ((selection == 'rock' && computerMove == 'scissors') || (selection == 'paper' && computerMove == 'rock') || (selection == 'scissors' && computerMove == 'paper')) {
        console.log("You won this round");
        humanScore++;

        const scores = document.createElement('div');
        scores.classList.add('scores');
        scores.textContent = `The player score is now: ${humanScore}`;
        container.appendChild(scores);


    } else {
        console.log("You lost this round")
        computerScore++;
    };

    if (humanScore == 5) {
        console.log("Game over. Human wins");
    }
    if (computerScore == 5) {
        console.log("Game over. Computer wins");
    }
}