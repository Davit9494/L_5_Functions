"use strict";
/*Write a function, which receives an array as an argument which elements arrays of numbers. Find
product of biggest negative number of each array. If there is not any negative number, ignore that
array. Check that items of the given array are arrays.*/

function prodOfNegative(arr) {
  let filteredArr;
  let prod = 1;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      filteredArr = arr[i].filter((item) => item < 0);
      if (filteredArr.length !== 0) {
        prod = prod * Math.max.apply(null, filteredArr);
      }
    } else {
      return "Invalid argument";
    }
  }
  return prod !== 1 ? prod : "No negatives";
}
console.log(
  prodOfNegative([
    [2, -3, 0, -1],
    [1, 2],
    [4, -11, 0],
  ])
);
