'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMassage =  function (message){
    document.querySelector('.message').textContent =
    message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //沒有輸入號碼時
  if (!guess) {
    displayMassage('🚫 No Number!(請輸入號碼!)');
    //猜對號碼時
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    displayMassage('🎉 Correct Number!( 答對了!)');
    //改變背景顏色
    document.querySelector('body').style.backgroundColor = '#60b347';
    //改變猜對數字寬度
    document.querySelector('.number').style.width = '30rem';

    //讓輸入框無法再輸入數字
    document.querySelector('.guess').disabled = true;

    //存最高分
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //號碼不對時
  } else if (guess !== secretNumber) {
    if (score > 1) {
        displayMassage(guess > secretNumber ? '📈 Too High!( 數字太大了!)' : '📉 Too Low!( 數字太小了!)');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMassage('You lost the game 😭 (你輸了...)');
      document.querySelector('.score').textContent = 0;
      //讓輸入框無法再輸入數字
      document.querySelector('.guess').disabled = true;
      //改變背景顏色
      document.querySelector('body').style.backgroundColor = '#ae2012';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMassage('Start guessing...');
  document.querySelector('.number').textContent = '?'
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
