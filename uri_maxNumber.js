var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a, b, c, max;

var entrada = lines.shift().split(' ');
a = parseInt(entrada.shift());
b = parseInt(entrada.shift());
c = parseInt(entrada.shift());
max = Math.max(a, b, c);
console.log(`${max} eh o maior`);