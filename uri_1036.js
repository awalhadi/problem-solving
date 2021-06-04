var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var totaldata = lines.shift().split(' ');

const a = parseFloat(totaldata.shift());
const b = parseFloat(totaldata.shift());
const c = parseFloat(totaldata.shift());

const middleStage = b*b - 4*a*c;


if (a > 0 && middleStage > 0) {
     const d = Math.sqrt(middleStage);
     const x1 = (-b + d) / (2*a);
     
     const x2 = (-b - d) / (2*a);
     const resultOne = x1.toFixed(5);
     const resultTwo = x2.toFixed(5);
     console.log("R1 =", resultOne);
     console.log("R2 =", resultTwo);
 }else{
    console.log("Impossivel calcular");
 }