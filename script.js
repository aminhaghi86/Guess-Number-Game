"use strict";

//  DECLARE variables
let button = document.getElementById("btn");
let res = document.getElementById("result");
let win = document.getElementById("win");
let resetPage = document.getElementById("reset");
let Realnumber = Math.floor(Math.random() * 100 + 1);
win.style.display="none"
// LISTEN TO CLICK EVENT
button.addEventListener("click", runGame);
console.log(Realnumber);
// RUN THE GAME BY PRESING BUTTON
function runGame() {
  let guessNumber = Number(prompt("Please Guess the number between 1 to 100"));
  if (guessNumber === Realnumber) {
    win.style.display="block"
    button.style.visibility = "hidden";
    console.log("woooooooooo!!!!!You Win");
    res.style.visibility='hidden'
    win.innerHTML = "woooow!!!You guess right!";
    win.style.color='green'
    resetPage.style.display = "block";
  } else if (guessNumber < Realnumber) {
    res.innerHTML = "you guess smaller number";
    res.style.color='yellow'
  } else if (guessNumber > Realnumber) {
    res.innerHTML = "you gues larger number";
    res.style.color='red'
  }
}

resetPage.addEventListener("click", () => {
  location.reload();
});
