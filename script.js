"use strict";
//  DECLARE variables
let button = document.getElementById("btn");
let res = document.getElementById("result");
let win = document.getElementById("win");
let resetPage = document.getElementById("reset");
let timeDispay = document.getElementById("timeDispay");

let originalNum = Math.floor(Math.random() * 100) + 1;
win.style.display = "none";
// LISTEN TO CLICK EVENT
button.addEventListener("click", runGame);
console.log(originalNum);
// RUN THE GAME BY PRESING BUTTON
function runGame() {
  let guessNumber = Number(prompt("Please Guess the number between 1 to 100"));
  if (guessNumber !=''){
  if (guessNumber === originalNum) {
    win.style.display = "block";
    button.style.visibility = "hidden";
    res.style.visibility = "hidden";
    win.innerHTML = ` Yes!!!!! The Number is ${guessNumber}`;
    win.style.color = "green";
    resetPage.style.display = "block";
  } else if (guessNumber < originalNum) {
    res.innerHTML = `${guessNumber} is less than original Number`;
    res.style.color = "yellow";
  } else if (guessNumber > originalNum) {
    res.innerHTML = `${guessNumber} is greater than original Number`;
    res.style.color = "red";
  }
}else {
  alert('please enter number :)')
}
}
resetPage.addEventListener("click", () => {
  location.reload();
});

// display date
let newdate = new Date();
let today =
  newdate.getFullYear() +
  "-" +
  (newdate.getMonth() + 1) +
  "-" +
  newdate.getDate();
timeDispay.innerHTML += today;
