"use strict";
//Write a function that calculates sum, difference, multiplication and division between given array
//elements depending on passed operation symbol. Write appropriate function for each operation.

function sum(arr) {
  return arr.reduce((acc, item) => acc + item);
}
function difference(arr) {
  return arr.reduce((acc, item) => acc - item);
}
function division(arr) {
  return arr.reduce((acc, item) => acc / item);
}
function multiplication(arr) {
  return arr.reduce((acc, item) => acc * item);
}
function calculate(arr, symbol) {
  if (!Array.isArray(arr) || arguments.length !== 2) {
    return "Please give an array as the firts argument and '+', '-', '*' or '/' as the second argument";
  }
  switch (symbol) {
    case "+":
      return sum(arr);

    case "-":
      return difference(arr);

    case "/":
      return division(arr);

    case "*":
      return multiplication(arr);

    default:
      return "Wrong symbol";
  }
}
console.log(calculate([1, 2, 3], "*"));
