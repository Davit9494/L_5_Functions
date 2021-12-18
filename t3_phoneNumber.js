"use strict";
//Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
//If the phone number is less than 10 digits assume that it is a bad number
//If the phone number is longer than 10, then it is a bad number
//If the phone number is 10 digits assume that it is good
//If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
//and return remaining 10 digits.
//If the phone number contains + symbol more than one, consider it as a bad number.
//If the phone number contains + symbol not as the first character, consider it as a bad number.
//Ignore spaces between digits.

function validPhoneNumber(phoneNum) {
  let flag = 0;
  let plusFlag = 0;
  let str = phoneNum;
  str = str.split("").filter((item) => item !== " ");
  str.forEach((element) => {
    if (element === "+") {
      plusFlag = plusFlag + 1;
    }
  });

  for (let i = 0; i < str.length; i++) {
    if (str.length === 11 && str[0] === "+" && plusFlag === 1) {
      flag = 2;
    } else if (str.length === 10 && plusFlag === 0) {
      flag = 3;
    }
  }
  if (flag == 2) {
    return `${str.filter((item) => item !== "+").join("")}`;
  } else if (flag == 3) {
    return `${phoneNum} is a good number`;
  } else {
    return `${phoneNum} is a bad number`;
  }
}

console.log(validPhoneNumber("23416+7891"));
