var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var totaldata = lines.shift().split(' ');
a = parseInt(totaldata.shift());
b = parseInt(totaldata.shift());
c = parseInt(totaldata.shift());
d = parseInt(totaldata.shift());

if ((b>c) && (d>a) && ((c+d)>(a+b)) && c>0 && d>0 && (a%2===0)) {
    console.log("Valores aceitos");
}else{
    console.log("Valores nao aceitos");
}

