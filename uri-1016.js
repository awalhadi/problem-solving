var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distance = parseInt(lines.shift());
console.log(`${distance*2} minutos`);