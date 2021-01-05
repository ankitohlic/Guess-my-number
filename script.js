'use strict';
let secratenumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (messsage) {
  document.querySelector('.message').textContent = messsage;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number');
  } else if (score > 1) {
    if (guess === secratenumber) {
      displayMessage('You won');
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').textContent = secratenumber;
      if (score > highscore)
        document.querySelector('.highscore').textContent = score;
    } else if (guess !== secratenumber) {
      displayMessage(guess > secratenumber ? 'its high' : 'its low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.score').textContent = 0;
    displayMessage('You lost');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
});
