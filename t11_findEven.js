"use strict";
//Write a function, which receives two numbers as arguments and finds all numbers between them
//such that each digit of the number is even. The numbers obtained should be printed in a comma-
//separated sequence on a single line.
function findEven(num1, num2) {
  let evenArr = [];
  for (let i = num1; i < num2; i++) {
    if (
      String(i).includes(1) ||
      String(i).includes(3) ||
      String(i).includes(5) ||
      String(i).includes(7) ||
      String(i).includes(9)
    ) {
      continue;
    } else {
      evenArr.push(i);
    }
  }
  return evenArr.length !== 0
    ? evenArr.join(",")
    : "Such numbers does not exist.";
}
console.log(findEven(19, 42));
