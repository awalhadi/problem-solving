
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const inputNumber = parseFloat(lines.shift());
if (inputNumber > 25.0000 && inputNumber <= 50.0000) {
    console.log('Intervalo (25,50]');
}
else if(inputNumber >= 0 && inputNumber <= 25.0000)
{
    console.log('Intervalo [0,25]');
}
else if(inputNumber > 50.0000 && inputNumber <= 75.0000)
{
    console.log('Intervalo (50,75]');
}
else if(inputNumber > 75.0000 && inputNumber <= 100.0000)
{
    console.log('Intervalo (75,100]');
}
else if(inputNumber < 0 || inputNumber > 100)
{
    console.log('Fora de intervalo');
}