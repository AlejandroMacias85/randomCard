/* eslint-disable */
import "./style.css";

window.onload = () => {
  // write your code here
  document.querySelector(".number").innerHTML = generateRandomNumbers();
  let suit = generateRandomSuit();
  document.querySelector(".top").innerHTML = suit;
  document.querySelector(".bottom").innerHTML = suit;
};
let generateRandomSuit = () => {
  let suit = ["♥️", "♦️", "♣️", "♠️"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  if (suit[indexSuit] == "♥️" || suit[indexSuit] == "♦️") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  }
  return suit[indexSuit];
};

let generateRandomNumbers = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "k"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
