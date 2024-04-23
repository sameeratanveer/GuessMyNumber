"use strict";

// 1. get the random number that is to be guessed.
let actualNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(actualNumber);

// 2. get the guessed value from interface. Get this value when check is clicked.

document.querySelector(".check").addEventListener("click", function () {
  let guessedNumber = Number(document.querySelector(".selected-number").value);
  // if player wins, bgcolor change = green, box width hould be greater;
  if (guessedNumber === actualNumber) {
    document.querySelector(".comparing-number").textContent =
      "🎉Correct Number";
    document.querySelector(".number-value").textContent = actualNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score-value").textContent = highScore;
    }
    //when player wins, the background color changes to green.
    document.querySelector("body").style.backgroundColor = "#60b347";

    //when player wins the box width should increase.
    document.querySelector(".actual-number").style.width = "10vw";
  } else if (guessedNumber !== actualNumber) {
    if (score > 1) {
      document.querySelector(".comparing-number").textContent =
        guessedNumber > actualNumber ? "📈Too High!" : "📉Too Low!";
      score = score - 1;
      document.querySelector(".score-value").textContent = score;
    } else {
      document.querySelector(".comparing-number").textContent =
        "💥Oh, You lost the game!";
      document.querySelector(".score-value").textContent = 0;
    }
  }
  // else if (guessedNumber > actualNumber) {
  //   if (score > 1) {
  //     document.querySelector(".comparing-number").textContent = "📈Too High!";
  //     score = score - 1;
  //     document.querySelector(".score-value").textContent = score;
  //   } else {
  //     document.querySelector(".comparing-number").textContent =
  //       "💥Oh, You lost the game!";
  //     document.querySelector(".score-value").textContent = 0;
  //   }
  // } else if (guessedNumber < actualNumber) {
  //   if (score > 1) {
  //     document.querySelector(".comparing-number").textContent = "📉Too Low!";
  //     score = score - 1;
  //     document.querySelector(".score-value").textContent = score;
  //   } else {
  //     document.querySelector(".comparing-number").textContent =
  //       "💥Oh, You lost the game!";
  //     document.querySelector(".score-value").textContent = 0;
  //   }
  // }
});

document.querySelector(".replay-game").addEventListener("click", function () {
  actualNumber = Math.floor(Math.random() * 20) + 1;
  console.log(actualNumber);
  document.querySelector(".comparing-number").textContent = "Start guessing...";
  document.querySelector(".number-value").textContent = "?";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".actual-number").style.width = "8vw";
  document.querySelector(".selected-number").value = "";
  score = 20;
  document.querySelector(".score-value").textContent = score;
});
