"use strict";
//Write a function which receives an array and a number as arguments and returns a new array from
//the elements of the given array which are larger than the given number.

function largerNumbers(arr, num) {
  let newArr = [];
  if (!Array.isArray(arr) || typeof num !== "number") {
    return `Give an array as a first argument and a number as a second argument.`;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        newArr.push(arr[i]);
      }
    }
  }
  if (newArr.length > 0) {
    return newArr;
  }
  return `Such values do not exist.`;
}

console.log(largerNumbers([6, 3, 4], -5));
