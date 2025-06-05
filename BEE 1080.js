// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = require('fs').readFileSync('./number_list.txt', 'utf8');
var lines = input.split('\n');



let max_value = Number.MIN_SAFE_INTEGER;
let max_position = 0;
let currentPosition = 0;

for (let i = 0; i < 100; i++) {
  currentPosition++;
  const num = parseInt(lines[i]);

  if (num > max_value) {
    max_value = num;
    max_position = currentPosition;
  }
}

console.log(max_value);
console.log(max_position);
