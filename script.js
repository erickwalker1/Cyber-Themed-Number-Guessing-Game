"use strict";

let result = document.querySelector(".guessing");
let attempts = document.querySelector(".attempts");
let magicNumber = document.querySelector(".whats-the-number");
let highestScore = document.querySelector(".high-score");

let replayButton = document.querySelector(".replay");
let checkAnswerButton = document.querySelector(".check-answer");
let inputBox = document.querySelector(".input");

/*  <!--  Original Content Stored In A Variable -->   */
let oldResult = result.innerHTML;
let originalAttempts = attempts.innerHTML;
let originalMagicNumber = magicNumber.innerHTML;
let originalHighestScore = highestScore.innerHTML;

checkAnswerButton.addEventListener("click", function (event) {
  let randomNumber = Math.floor(Math.random() * 11);
  /*  <!--  If input value matches random number, number is reflected in box and 'correct' is shown on page  -->   */
  if (Number(inputBox.value) === randomNumber) {
    magicNumber.innerHTML = randomNumber;
    result.innerHTML = `&#9989; Correct Number!`;

    updatedHighScore();
    console.log(`You Win!`);
  } else {
    /*  <!--  If input value != random number, result is shown on page & attempts decrease -->   */
    if (Number(inputBox.value) > randomNumber) {
      result.innerHTML = `❌ Too High!`;
    } else if (Number(inputBox.value) < randomNumber) {
      result.innerHTML = `❌ Too Low!`;
    }
    let newAttempt = Number(attempts.innerHTML) - 1;
    attempts.innerHTML = newAttempt;
    console.log(`Wrong Number! Try Again!`);
  }
  checkScore();
  console.log(randomNumber);
  return randomNumber;
});

/*  <!--  Original Stats Restored After Clicking Replay Button -->   */
replayButton.addEventListener("click", function () {
  attempts.innerHTML = originalAttempts;
  result.innerHTML = oldResult;
  magicNumber.innerHTML = originalMagicNumber;
  inputBox.value = "";
});

/*  <!--  If number is guessed correctly and attempts are still present, increase high score -->   */
let updatedHighScore = function () {
  if (Number(attempts.innerHTML) > 0) {
    let newHighestScore = Number(highestScore.innerHTML) + 1;
    highestScore.innerHTML = newHighestScore;
  }
};

/*  <!--  If attempts are used up, game over -->   */
let checkScore = function () {
  if (Number(attempts.innerHTML) === 0) {
    result.innerHTML = `Game Over! Out Of Attempts!`;
    highestScore.innerHTML = originalHighestScore;
  }
};