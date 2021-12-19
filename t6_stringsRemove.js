"use strict";
//Write a function which receives two strings and removes appearances of the second string from the
//first one.
function remove(str, word) {
  let newStr = "";
  let b = word.length;
  for (let i = 0; i < str.length; i++) {
    let c = str.substring(i, i + b);

    if (word === c) {
      newStr = newStr;
      i = i + b - 1;
    } else {
      newStr = newStr + str[i];
    }
  }

  return newStr;
}

console.log(remove("This is some text.", "is"));
console.log(
  remove(
    "Yes, London. You know: fish, chips, cup o tea, bad, food, worse weather",
    "o"
  )
);
