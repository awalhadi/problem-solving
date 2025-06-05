var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var days = parseInt(lines.shift());
var year = parseInt(days / 365);
console.log(`${year} ano(s)`);

var rest = parseInt(days % 365);
var m = parseInt(rest / 30);
console.log(`${m} mes(es)`);

var d = parseInt(rest % 30);
console.log(`${d} dia(s)`); 