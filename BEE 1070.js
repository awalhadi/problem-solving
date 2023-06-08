var input = '8';
var lines = input.split('\n');
inputNumber = parseInt(lines.shift());

let count = 1;
let currentNumber = inputNumber;

while (count <= 6) {
  if (currentNumber % 2 != 0) {
    console.log(currentNumber);
    count++;
  }
  currentNumber++
}
