var input = require('fs').readFileSync('./two_numbers.txt', 'utf8');
var lines = input.split('\n');
const [upperNumber, lowerNumber] = lines.map(x => Number(x.replace(/\s/g, '')));
let totalSum = 0;
for (let i = lowerNumber+1; i < upperNumber; i++) {
    if (i % 2 !== 0) {
        totalSum += i;
    }
}
console.log(parseInt(totalSum));