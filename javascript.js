let humanScore = 0;
let computerScore = 0;
let round = 0;
let tieRound = false;

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
        const tie = document.createElement('div');
        tie.classList.add('tie');
        tie.textContent = `It's a tie. Choose again.`
        container.appendChild(tie);
        
        const lineBreak = document.createElement('br');
        lineBreak. classList.add('lineBreak');
        container.appendChild(lineBreak);

    } else if ((selection == 'rock' && computerMove == 'scissors') || (selection == 'paper' && computerMove == 'rock') || (selection == 'scissors' && computerMove == 'paper')) {
        console.log("You won this round");
        humanScore++;
        round++;

        const scores = document.createElement('div');
        scores.classList.add('scores');
        scores.textContent = `After round ${round}, the score is now: human ${humanScore}, computer ${computerScore}`;
        container.appendChild(scores);

        const lineBreak = document.createElement('br');
        lineBreak. classList.add('lineBreak');
        container.appendChild(lineBreak);


    } else {
        console.log("You lost this round")
        computerScore++;
        round++;

        const scores = document.createElement('div');
        scores.classList.add('scores');
        scores.textContent = `After round ${round}, the score is now: human ${humanScore}, computer ${computerScore}`;
        container.appendChild(scores);

        const lineBreak = document.createElement('br');
        lineBreak. classList.add('lineBreak');
        container.appendChild(lineBreak);
    };

    if (humanScore == 5) {
        console.log("Game over. Human wins");
        endGame();
    }
    if (computerScore == 5) {
        console.log("Game over. Computer wins");
        endGame();
    }
}

function endGame() {
    const ending = document.createElement('div');
    ending.classList.add('ending');
    if (humanScore == 5) {
        ending.textContent = `After round ${round}, the game is over! Human wins!`;
        container.appendChild(ending);

        const lineBreak = document.createElement('br');
        lineBreak. classList.add('lineBreak');
        container.appendChild(lineBreak);

    } else if (computerScore ==5) {
        ending.textContent = `After round ${round}, the game is over! Computer wins!`;
        container.appendChild(ending);

        const lineBreak = document.createElement('br');
        lineBreak. classList.add('lineBreak');
        container.appendChild(lineBreak);

    }
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
  
    const restart = document.createElement('button');
    restart.classList.add('restart');
    restart.textContent = 'Click me to play again!';
    container.appendChild(restart);
  
    // This will clear everything when restarted
    restartButton = document.getElementsByClassName('restart');
    restartButton[0].addEventListener('click', function (e) {
      console.log("Clear the dom tree.");
      const list = document.getElementById('container');
      while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }
      //This will reset the buttons to click again
      document.getElementById('rock').disabled = false;
      document.getElementById('paper').disabled = false;
      document.getElementById('scissors').disabled = false;
      humanScore = 0;
      computerScore = 0;
      round = 0;
    })
  }