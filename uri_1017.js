var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var spent_time = parseInt(lines.shift());
var distance = parseInt(lines.shift());
var need_oil = parseFloat(distance* spent_time/12.0).toFixed(3);
console.log(need_oil);