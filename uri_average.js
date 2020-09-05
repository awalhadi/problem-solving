//   this is only online judge practice

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var total_distance_traveled, spent_fuel, average;

total_distance_traveled = parseInt(lines.shift());
spent_fuel = parseFloat(lines.shift()).toFixed(1);
average = parseFloat(total_distance_traveled / spent_fuel).toFixed(3);
console.log(`${average} km/l`);
