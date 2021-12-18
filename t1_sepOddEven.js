"use strict";
//Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

function sepArrOddEven(arr) {
  if (!Array.isArray(arr)) {
    return `Give array as an argument`;
  }
  let oddArr = [];
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    } else {
      oddArr.push(arr[i]);
    }
  }
  return `[${oddArr}] [${evenArr}]`;
}

console.log(sepArrOddEven([1, 5, 7, 9]));
