"use strict";
//Write a function to compute a new string from the given one by moving the first char to come after
//the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars.
//Ignore any group of fewer than 3 chars at the end.
function changeStr(str) {
  let arr = [];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  for (let i = 0; i < arr.length - 2; i++) {
    newStr = newStr + (arr[i + 1] + arr[i + 2] + arr[i]);
    i = i + 2;
  }
  let count = arr.length - newStr.length;
  if (newStr.length !== arr.length && count === 1) {
    newStr = newStr + arr[arr.length - 1];
  } else if (newStr.length !== arr.length && count === 2) {
    newStr = newStr + arr[arr.length - 2] + arr[arr.length - 1];
  }
  return newStr;
}
console.log(changeStr("aweyool"));
