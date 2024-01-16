// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
  let bin = '';

  if(typeof element != String) {
    if(element === 0) {
      return 0;
    }
    while(element > 0) {
      let rest = element % 2;

      bin = rest + bin;

      element = Math.floor(element / 2);
    }
  } else {
    let hex = element.slice(2).toUpperCase();

    const map = {
      '0': 0, '1': 0, '2': 0, '3': 0,
      '4': 0, '5': 0, '6': 0, '7': 0,
      '8': 0, '9': 0, 'A': 0, 'B': 0,
      'C': 0, 'D': 0, 'E': 0, 'F': 0
    }

    for(let i = 0; i < hex.length; i++) {
      let dig = hex[i];
      bin += map[dig];
    }
  }

  return '0b' + bin;
};

/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010
