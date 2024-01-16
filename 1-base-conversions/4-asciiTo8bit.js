const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  const  charTo8Bit = char => {
    const ascii = char.charCodeAt(0);
    const bin = ascii.toString(2);
    return addZeros(bin, 8);
  }

  let result = '';

  for(let i = 0; i < str.length; i++) {
    result += charTo8Bit(str[i]);
  }

  return result;
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001

