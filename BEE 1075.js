var input = require('fs').readFileSync('./data.txt', 'utf8');
var lines = input.split('\n');

const inputNumber = Number.parseInt(lines.shift());
// console.log('lines:', Number.parseInt(lines.shift()));

for (let i = 1; i <= 10000; i++) {
  if (i % inputNumber === 2) {
    console.log(i);
  }
}