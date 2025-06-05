var input = require('fs').readFileSync('./event_time.txt', 'utf8');
var lines = input.split('\n');
const numbers = lines.map(x => Number(x.replace(/\s/g, '')));

let evenNumber = 0;
let oddNumber = 0;
let positiveNumber = 0;
let negetiveNumber = 0;

for (let i = 0; i < 5; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumber++;
  } else {
    oddNumber++;
  }

  if (numbers[i] > 0) {
    positiveNumber++;
  } else if (numbers[i] < 0) {
    negetiveNumber++;
  }
}

console.log(`${evenNumber} valor(es) par(es)`);
console.log(`${oddNumber} valor(es) impar(es)`);
console.log(`${positiveNumber} valor(es) positivo(s)`);
console.log(`${negetiveNumber} valor(es) negativo(s)`);
