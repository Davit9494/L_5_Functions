"use strict";
//Given a word and a list of possible anagrams, select the correct sublist.
function check(str, array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    bar2 = array[i];
    let flag = 0;
    for (let j = 0; j < str.length; j++) {
      if (bar2.includes(str[j])) {
        flag = flag + 1;
      }
    }
    if (str.length === flag && flag === bar2.length) {
      newArr.push(bar2);
    }
  }
  return newArr;
}
console.log(
  check("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"])
);
