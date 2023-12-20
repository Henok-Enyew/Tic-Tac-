"use strict";
/* © ALl rights Reserved -- By Enoch 👩‍💻😃*/

const buttonsEl = document.querySelectorAll(".row");

const btnNew = document.querySelector(".btn-new");

let button0,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8;
const button = [];

const score0El = document.querySelector(".score--0");
const score1El = document.querySelector(".score--1");

let activePlayer = 0;
let isPlaying = true;
const scores = [0, 0];
let buttonText = activePlayer == 0 ? "❌" : "⭕";
let buttonValue = activePlayer;
let counter = 0;

document
  .querySelector(".close-winner-btn")
  .addEventListener("click", function () {
    document.querySelector(".winner").classList.add("hidden");
  });

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].textContent = " ";
}

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", function () {
    if (button[i] == null) {
      document
        .querySelector(`.player--${activePlayer === 0 ? 1 : 0}`)
        .classList.add("player-active");

      buttonsEl[i].textContent = buttonText;
      buttonValue = activePlayer;

      activePlayer = activePlayer === 0 ? 1 : 0;
      document
        .querySelector(`.player--${activePlayer === 0 ? 1 : 0}`)
        .classList.remove("player-active");

      buttonText = activePlayer == 0 ? "❌" : "⭕";
      button[i] = buttonValue;
      console.log(button[i], i);
      counter++;
      console.log(`counter - ${counter}`);
    }
    if (
      (button[0] == 0 && button[1] == 0 && button[2] == 0) ||
      (button[0] == 0 && button[3] == 0 && button[6] == 0) ||
      (button[0] == 0 && button[4] == 0 && button[8] == 0) ||
      (button[1] == 0 && button[4] == 0 && button[7] == 0) ||
      (button[2] == 0 && button[5] == 0 && button[8] == 0) ||
      (button[2] == 0 && button[4] == 0 && button[6] == 0) ||
      (button[3] == 0 && button[4] == 0 && button[5] == 0) ||
      (button[6] == 0 && button[7] == 0 && button[8] == 0)
    ) {
      scores[0]++;
      score0El.textContent = scores[0];
      counter = 0;
      if (scores[0] >= 4) {
        document.querySelector(`.winner-player`).textContent = `Player 1(❌)`;
        document.querySelector(`.name--0`).textContent = `🏆🏆🏆 (❌)`;
        document.querySelector(".winner").classList.remove("hidden");
        document.querySelector(".player--0").classList.add("player-winner");
      }
      for (let i = 0; i < buttonsEl.length; i++) {
        buttonsEl[i].textContent = " ";
        button[i] = null;
      }
    } else if (
      (button[0] == 1 && button[1] == 1 && button[2] == 1) ||
      (button[0] == 1 && button[3] == 1 && button[6] == 1) ||
      (button[0] == 1 && button[4] == 1 && button[8] == 1) ||
      (button[1] == 1 && button[4] == 1 && button[7] == 1) ||
      (button[2] == 1 && button[5] == 1 && button[8] == 1) ||
      (button[2] == 1 && button[4] == 1 && button[6] == 1) ||
      (button[3] == 1 && button[4] == 1 && button[5] == 1) ||
      (button[6] == 1 && button[7] == 1 && button[8] == 1)
    ) {
      scores[1]++;
      score1El.textContent = scores[1];
      counter = 0;
      if (scores[1] >= 4) {
        document.querySelector(`.winner-player`).textContent = `Player 2(⭕)`;
        document.querySelector(`.name--1`).textContent = `🏆🏆🏆 (⭕)`;

        document.querySelector(".winner").classList.remove("hidden");
        document.querySelector(".player--1").classList.add("player-winner");
      }
      for (let i = 0; i < buttonsEl.length; i++) {
        buttonsEl[i].textContent = " ";
        button[i] = null;
      }
    } else if (counter == 9) {
      counter = 0;
      console.log("drawwwwwwwwww");
      for (let i = 0; i < buttonsEl.length; i++) {
        buttonsEl[i].textContent = " ";
        button[i] = null;
      }
    }
  });
}

btnNew.addEventListener("click", function () {
  scores[0] = 0;
  scores[1] = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  counter = 0;
  for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].textContent = " ";
    button[i] = null;
  }
  document.querySelector(".winner").classList.add("hidden");
  document.querySelector(`.name--0`).textContent = `Player ❌`;
  document.querySelector(`.name--1`).textContent = `Player ⭕`;

  document.querySelector(".player").classList.remove("player-winner");
});
