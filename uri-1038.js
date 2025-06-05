const totaldata = lines.shift().split(' ');

const x = totaldata.shift(); //code  number
const y = totaldata.shift(); //quantity
const prices  = [4.00, 4.50, 5.00, 2.00, 1.50];

console.log(`Total: R$ ${(prices[x-1]*y).toFixed(2)}`);


