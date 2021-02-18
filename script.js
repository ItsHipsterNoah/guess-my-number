'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number.parseInt(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ Oops! You forgot to enter a number!');
  }
  // Correct guess
  else if (guess === secretNumber && score !== 0) {
    displayMessage('🎉 Correct Number! ');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? '📈 Too high! ' : '📉 Too low!');
      --score;
      document.querySelector('.score').textContent = score;
    }
    else {
      displayMessage() = '😞 Oh no! Game over!';
      document.querySelector('.score').textContent = 0;
    }
  }

});
