'use strict';

const reverse = (str) =>
  str.split('').reverse().join('');

const numIsPalindrome = function (num, base) {
  let numAsString = num.toString(base);
  return numAsString === reverse(numAsString);
};

// This function will be called with arguments 2, 10, and 1000000
const doubleBasePalindromeSum = function (base1, base2, upperLimit) {
  let sum = 0;
  for (let i = 0; i < upperLimit; i++) {
    if (numIsPalindrome(i, base1) && numIsPalindrome(i, base2)) {
      sum += i;
    }
  }

  return sum;
};

module.exports = {
  doubleBasePalindromeSum,
};
