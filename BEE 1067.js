var input = '8';
var lines = input.split('\n');
inputNumber = parseInt(lines.shift());

for (let i = 1; i <= inputNumber; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}