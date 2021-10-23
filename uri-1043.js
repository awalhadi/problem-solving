

const input = require('fs').readFileSync('./number.txt', 'utf8'); //this test file check

var lines = input.split("\n");

const [a,b,c] = lines.shift().split(' ').map(num => parseFloat(num));

if (a + b <= c || b + c <= a || c + a <= b) {
    const trapezoidalAarea = ((a + b)/2) * c;
    console.log(`Area = ${trapezoidalAarea.toFixed(1)}`);   
}else{
    const TryanglePereimeter = a + b + c;
    console.log(`Perimetro = ${TryanglePereimeter.toFixed(1)}`);
}

