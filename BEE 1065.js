var input = require('fs').readFileSync('./event_time.txt', 'utf8');
var lines = input.split('\n');
const numbers = lines.map(x => x.replace(/Dia/, '')).map(x => parseInt(x.replace(/\s/g, '')));
let evenNumber = 0;
numbers.forEach(number => {
  if (number % 2 == 0) {
    evenNumber += 1;
  }
});
console.log(`${evenNumber} valores pares`);