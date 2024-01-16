// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = element => {
  let hex;
  if(typeof element != String) {
    hex = '';
    dig = '0123456789ABCDEF';

    while(element > 0) {
      let rest = element % 16;

      hex = dig[rest] + hex;
      element = Math.floor(element / 16);
    }
  } else {
    let bin = element.slice(2);

    const binarioGrupos = bin.match(/.{1,4}/g); // Agrupa de 4 en 4

    for (let i = 0; i < binarioGrupos.length; i++) {
      const grupoBinario = binarioGrupos[i];
      const decimal = parseInt(grupoBinario, 2); // Convierte a decimal
      const digitoHexadecimal = decimal.toString(16).toUpperCase(); // Convierte a hexadecimal
      hex += digitoHexadecimal;
    }
  }

  return '0x' + hex;
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
