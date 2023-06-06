var input = require('fs').readFileSync('./event_time.txt', 'utf8');
var lines = input.split('\n');
const numbers = lines.map(x => x.replace(/Dia/, '')).map(x => parseFloat(x.replace(/\s/g, '')));
let positiveNumber = 0;
let total = 0;
numbers.forEach(eachNumber => {
  
  if (eachNumber > -1) {
    positiveNumber += 1;
    total = total + parseFloat(eachNumber);
  }
});
const average = parseFloat(total/positiveNumber).toFixed(1);
console.log(`${positiveNumber} valores positivos`);
console.log(average);