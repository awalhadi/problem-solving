const input = "400.00"
var lines = input.split('\n')
const [salary] = lines.shift().split(' ').map(num => parseFloat(num).toFixed(2));

let totalSalaryAfterIncrement = 0;
let increment = 0;
let incrementPercent = 0;
//if  0 - 400.00 =
if (salary <= 400.00) {
    incrementPercent = 15;
    // apply 15% increase of salary
    incrementPercent = 15;
}
else if(400.00 < salary && salary <= 800.00){
    // apply 12% increase of salary
    incrementPercent = 12;
}
else if(800.00 < salary && salary <= 1200.00){
    // apply 10% increase of salary
    incrementPercent = 10;
}
else if(1200.00 < salary && salary <= 2000.00){
    // apply 7% increase of salary
    incrementPercent = 7;
}
else if(2000.00 < salary){
    // apply 4% increase of salary
    incrementPercent = 4;
}
increment = ((incrementPercent * salary) / 100).toFixed(2);

totalSalaryAfterIncrement = (parseFloat(salary) + parseFloat(increment)).toFixed(2);

console.log(`Novo salario: ${totalSalaryAfterIncrement}`);
console.log(`Reajuste ganho: ${increment}`);
console.log(`Em percentual: ${incrementPercent} %`);
