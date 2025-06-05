var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const [startTime,endTime] = lines.shift().split(' ').map(num => parseInt(num));

let   diff      = endTime - startTime;
if (diff <= 0) {
    diff = diff + 24;
}
console.log(`O JOGO DUROU ${diff} HORA(S)`);