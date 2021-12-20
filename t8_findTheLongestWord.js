"use strict";
//Write a function that accepts a string(a sentence) as a parameter and finds the longest word within
//the string. If there are several words which are the longest ones, print the last word(words can be
//separated by space, comma or hyphen).
function findLongestWord(str) {
  let arr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].replace(/[, ? !]/gi, ""));
  }
  let longestWord = newArr[0];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length >= longestWord.length) {
      longestWord = newArr[i];
    }
  }
  return longestWord;
}
console.log(
  findLongestWord(
    "Which would, be worse - to live as a monster, or to die as a good man????????????????"
  )
);
console.log(
  findLongestWord("A revolution, without dancing is not worth having.")
);
