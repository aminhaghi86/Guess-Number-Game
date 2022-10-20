"use strict";

//  DECLARE BUTTON 
let button = document.getElementById("btn");

// LISTEN TO CLICK EVENT
button.addEventListener("click", runGame);

// RUN THE GAME BY PRESING BUTTON
function runGame() {
  let Realnumbers = Math.floor(Math.random() * 100 + 1);
  let i = 1;
  while (i < 11) {
    let guessNumber = Number(
      prompt("Please Guess the number between 1 to 100")
    );

    if (guessNumber === Realnumbers) {
      alert("woooooooooo!!!!!You Win");
      break;
    } else {
      i++;
    }
  }
}
