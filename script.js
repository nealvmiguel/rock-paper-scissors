'use strict';

const humanScore = document.querySelector('.human-score');
const computerScore = document.querySelector('.computer-score');
const computerChoices = document.querySelectorAll('.computer-choice');
const playerChoices = document.querySelectorAll('.player-choice');
const result = document.querySelector('.result');
const btnContainer = document.querySelector('.btn-container');
let playerScore = 0;
let computerScoreValue = 0;
const WIN_SCORE = 5;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function setActiveChoice(choices, selectedChoice) {
  choices.forEach((choice) => {
    choice.classList.toggle(
      'is-active',
      choice.dataset.choice === selectedChoice,
    );
  });
}

function updateScores(winner) {
  if (winner === 'player') {
    playerScore++;
    humanScore.textContent = `PLAYER SCORE: ${playerScore}`;
  }

  if (winner === 'computer') {
    computerScoreValue++;
    computerScore.textContent = `COMPUTER SCORE: ${computerScoreValue}`;
  }
}

function announceRoundWinner(winner) {
  if (winner === 'tie') {
    result.textContent = "It's a tie!";
    return;
  }

  result.textContent =
    winner === 'player' ? 'Player scores!' : 'Computer scores!';
}

function checkGameOver() {
  if (playerScore === WIN_SCORE) {
    result.textContent = 'PLAYER WINS THE GAME!';
    return true;
  }

  if (computerScoreValue === WIN_SCORE) {
    result.textContent = 'COMPUTER WINS THE GAME!';
    return true;
  }

  return false;
}

function playRound(playerChoice) {
  const isGameOver = checkGameOver();
  if (isGameOver) return;

  const computerChoice = getComputerChoice();
  const winner = getRoundWinner(playerChoice, computerChoice);

  setActiveChoice(playerChoices, playerChoice);
  setActiveChoice(computerChoices, computerChoice);

  updateScores(winner);
  announceRoundWinner(winner);
}

btnContainer.addEventListener('click', (e) => {
  const button = e.target.closest('.btn');
  if (!button) return;

  playRound(button.dataset.choice);
});
