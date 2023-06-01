var input = "3002.00";
var lines = input.split('\n');
const salary = parseFloat(lines.shift()).toFixed(2);

if (salary >= 0 && salary <= 2000) {
  console.log("Isento");
} else if (salary > 2000 && salary <= 3000) {
  console.log(`R$ ${parseFloat((salary - 2000) * 0.08).toFixed(2)}`);
} else if (salary > 3000 && salary <= 4500) {
  console.log(`R$ ${parseFloat(((salary-3000)*0.18) + 80).toFixed(2)}`);
} else {
  console.log(`R$ ${parseFloat(((salary-4500)*0.28) + 350).toFixed(2)}`);
}