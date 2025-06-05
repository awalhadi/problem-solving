var input = "2";
var lines = input.split('\n');
const inputMonthInNuber = parseInt(lines.shift());
const month= ["January","February","March","April","May","June","July", "August","September","October","November","December"];
console.log(month[inputMonthInNuber-1]);