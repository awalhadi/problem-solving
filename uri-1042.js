// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./number.txt', 'utf8'); //this test file check

var lines = input.split("\n");

const data = lines.shift().split(' ').map(num => parseInt(num));
const another = [...data];
another.sort((a,b) => a -b);
console.log(another.join("\n"));
console.log("");
console.log(data.join("\n"));
