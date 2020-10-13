var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let second = parseInt(lines.shift());
var h = parseInt(second / 3600);
var rest = second % 3600;
var m = parseInt(rest / 60);
var s = rest % 60;

console.log(`${h}:${m}:${s}`);