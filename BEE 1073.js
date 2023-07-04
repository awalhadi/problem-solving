var input = '6';
var lines = input.split('\n');
inputNumber = parseInt(lines.shift());

let number = 1;
let currentNumber = inputNumber;

while (number <= input) {
  if (number % 2 === 0) {
    console.log(`${number}^2 = ${number**2}`);
  }
  number++;
}
