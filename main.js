let score = Number(document.querySelector('.score').innerHTML);
let highscore = Number(document.querySelector('.highscore').innerHTML);

document.querySelector('.btn.again').onclick = function () {
  location.reload();
};

document.querySelector('.btn.check').onclick = function () {
  //compare guess vs number
  let guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').innerHTML = highscore;
    }

    document.querySelector('.message').innerHTML = '🌸 No input number!';
    document.querySelector('.guess').style.border = '0.3rem solid red';
    setTimeout(() => {
      document.querySelector('.guess').style.border = '0.3rem solid #fff';
    }, 200);
  } else {
    if (score > 1) {
      let number = Math.trunc(Math.random() * 20) + 1;

      document.querySelector('.number').innerHTML = number;

      if (guessNumber === number) {
        document.querySelector('.message').innerHTML = '✨ Congratulate!';

        score = score + guessNumber;
        document.querySelector('.score').innerHTML = score;
        document.querySelector('body').style.backgroundColor = '#AB78E6';
      }
      if (guessNumber < number) {
        document.querySelector('.message').innerHTML = '📉 Too low!';

        document.querySelector('.score').innerHTML = score;

        score--;
        console.log(score);

        document.querySelector('body').style.backgroundColor = '#222';
      }
      if (guessNumber > number) {
        document.querySelector('.message').innerHTML = '📈 Too high!';

        score--;
        console.log(score);
        document.querySelector('.score').innerHTML = score;
        document.querySelector('body').style.backgroundColor = '#222';
      }
    } else {
      score = 0;
      document.querySelector('.score').innerHTML = score;
      document.querySelector('.message').innerHTML = '😫 Game over!';
      document.querySelector('.message').style.color = 'red';

      document.querySelector('body').style.backgroundColor = '#E5784C';
    }
  }
};
