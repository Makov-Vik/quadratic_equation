const { errorMonitor } = require('events');
const fs = require('fs');

const nameFile = 'input.txt'

const equation = () => {
  let content = '';

  if(nameFile.split('.')[1] != 'txt') {
    throw new Error('Invalid file format')
  }
  const readStream = fs.createReadStream(`./data/${nameFile}`, "utf-8");

  readStream.on("data", (chunk) => {
      content += chunk;
  });
  

  readStream.on("end", () => {
    //console.log(content);
    
    try {
      const arrInput = content.split(' ');

      const numbers = arrInput.map((item, index) => {
        const number = Number(item);
        if(isNaN(number)) {
          throw new Error(`Expected a valid real number, got "${item}" instead`);
        }
        else if(number === 0 && index === 0) {
          throw new Error('Error. a cannot be 0');
        }
        return number;
      })

      console.log(numbers);
      const a = numbers[0];
      const b = numbers[1];
      const c = numbers[2];

      console.log(`Equation is: (${a})x^2 + (${b})x + (${c}) = 0`);

      const d = numbers[1] * numbers[1] - 4 * numbers[0] * numbers[2];
      if(d < 0) {
        console.log('There are 0 roots');
      }
      else if(d == 0) {
        console.log('There are 1 roots');
        const x1 = -1 * b / (2 * a);
        console.log(x1);
      }
      else {
        console.log('There are 2 roots');

        const x1 = Math.floor(((-1 * b + Math.sqrt(d)) / (2 * a)) * 1000) / 1000;
        const x2 =  Math.floor(((-1 * b - Math.sqrt(d)) / (2 * a)) * 1000) / 1000;
        console.log('x1: ' + x1 + '\nx2: ' + x2);
      }
    }

    catch(err) {
      console.log(err);
    }

  })
}

equation();