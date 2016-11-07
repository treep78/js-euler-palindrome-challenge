'use strict';

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively
const decToBin = function(dec) {
  return (dec >>> 0).toString(2);
};

const doubleBasePalindromeSum = function (base1, base2, upperLimit) {
  let palendromes = [];
  for(let i = 0; i<upperLimit; i++) {
    let iMirror = (i+"").split("").reverse().join().replace(/,/g, "")/1;
    let iBin = decToBin(i);
    let iBinMirror = (iBin+"").split("").reverse().join().replace(/,/g, "")/1;
    if(i===iMirror) {
      palendromes.push(i);
    }
    else if(iBin === iBinMirror)
    {
      palendromes.push(i);
    }
  }
  console.log(upperLimit+" | "+palendromes)
  return palendromes.reduce(function(a, b) {
    return a + b;
  }, 0);
};

module.exports = {
  doubleBasePalindromeSum,
};
