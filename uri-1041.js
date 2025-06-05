// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./number.txt', 'utf8'); //this test file check

var lines = input.split("\n");

const data = lines.shift().split(' ');
const x = parseFloat(data.shift());
const y = parseFloat(data.shift());

// console.log(typeof x, typeof y);

if (x === 0.0 && y === 0.0) {
    console.log('Origem');
}
else if(x != 0.0 && y === 0.0){
    console.log('Eixo X');
}
else if(x === 0.0 && y != 0.0){
    console.log('Eixo Y');
}
else if (x > 0 && y > 0) {
    console.log('Q1');
}
else if(x < 0 && y > 0){
    console.log('Q2');
}
else if(x < 0 && y < 0)
{
    console.log('Q3');
}
else if(x > 0 && y < 0 ){
    console.log('Q4');
}