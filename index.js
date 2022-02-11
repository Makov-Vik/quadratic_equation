'use strict';

const fs = require('fs');
const readlineSync = require('readline-sync');


const valid = (message) => {
  const numbers = message.map((item, index) => {
    const num = Number(item);
    if(isNaN(num)) {
      throw new Error(`Expected a valid real number, got "${item}" instead`);
    }
    else if(num === 0 && index === 0) {
      throw new Error('Error. a cannot be 0');
    }
    return num;
  })
  return numbers;
}

const calculate = (a, b, c) => {
  console.log(`Equation is: (${a})x^2 + (${b})x + (${c}) = 0`);
  const discriminant = b * b - 4 * a * c;
  if(discriminant < 0) {
    console.log('There are 0 roots');
  }
  else if(discriminant == 0) {
    console.log('There are 1 roots');
    const x1 = -1 * b / (2 * a);
    console.log(x1);
  }
  else {
    console.log('There are 2 roots');

    const x1 = Math.floor(((-1 * b + Math.sqrt(discriminant)) / (2 * a)) * 1000) / 1000;
    const x2 =  Math.floor(((-1 * b - Math.sqrt(discriminant)) / (2 * a)) * 1000) / 1000;
    console.log('x1: ' + x1 + '\nx2: ' + x2);
  }
}

const nonInteractive = (nameFile) => {
  let content = '';

  if(nameFile.split('.')[1] != 'txt') {
    throw new Error('Invalid file format')
  }
  const readStream = fs.createReadStream(`./data/${nameFile}`, "utf-8");

  readStream.on("data", (chunk) => {
      content += chunk;
  });

  readStream.on("end", () => {
    
    try {
      const arrInput = content.split(' ');

      const numbers = valid(arrInput);

      const a = numbers[0];
      const b = numbers[1];
      const c = numbers[2];

      calculate(a, b, c);
    }

    catch(err) {
      console.log(err);
    }

  })
}

const question = readlineSync.question;
const nameFile = process.argv[2];
let a, b, c

if(nameFile) { 
  nonInteractive(nameFile);
}
else {
  a = question('Enter a: ');
  b = question('Enter b: ');
  c = question('Enter c: ');
  const numbers = valid([a, b, c]);
  calculate(numbers[0], numbers[1], numbers[2]);
}