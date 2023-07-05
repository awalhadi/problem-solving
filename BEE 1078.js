var input = require('fs').readFileSync('./data.txt', 'utf8');
var lines = input.split('\n');

// const inputNumber = Number.parseInt(lines.shift());
const inputNumber = 140;

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${inputNumber} = ${i*inputNumber}`);
}