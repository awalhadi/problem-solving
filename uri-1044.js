

const input = require('fs').readFileSync('./number.txt', 'utf8'); //this test file check

var lines = input.split("\n");

const [a,b] = lines.shift().split(' ').map(num => parseInt(num));

if (a % b == 0 || b % a == 0) {
    console.log('Sao Multiplos');
}else{
    console.log('Nao sao Multiplos');
}

