"use strict";
//Write a function, which receives a string, finds possible largest numbers in the string and returns their sum.
function sumOfNumbers(str) {
  let sum = 0;
  let arr = str.match(/-?\d+/g);
  for (let i = 0; i < arr.length; i++) {
    sum = sum + parseInt(arr[i]);
  }

  return sum;
}

console.log(sumOfNumbers("FwrtY0120-KHL-120mn-10P"));
