let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'ROCK';
    case 1:
      return 'PAPER';
    case 2:
      return 'SCISSORS';
  }
}

function getHumanChoice() {
  return prompt('rock, paper, scissors').toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log('=================');
    console.log("IT'S A TIE!!!");
    console.log('=================');
  }

  if (
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log('=================');
    console.log('Human score!!!!!');
    console.log('=================');
    humanScore++;
  } else {
    console.log('=================');
    console.log('Computer score!!!!!');
    console.log('=================');
    computerScore++;
  }
}

function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  console.log('=================================');
  if (humanScore === 5) {
    console.log('Human wins the game!');
  } else {
    console.log('Computer wins the game!');
  }
  console.log(`Human Final Score: ${humanScore}`);
  console.log(`Computer FInal Score: ${computerScore}`);
}

playGame();
