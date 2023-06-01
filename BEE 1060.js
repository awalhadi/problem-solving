// var input = "7 -5 6 -3.4 4.6 12";

// let count = 0;
// for (let i=1; i < 6; 1++) {
//   var lines = input.split('\n');
//   const inputNumber = parseInt(lines.shift());
//   if (inputNumber > 0) {
//     count += 1;
//   }
// }
// console.log(`${count} valores positivos`);
var lines = input.split('\n');
let number = lines.shift();
let cont = 0;
for(let i = 0; i < 6; i++){
  if(number > 0) cont++;
  number = lines.shift();
}
console.log(`${cont} valores positivos`);