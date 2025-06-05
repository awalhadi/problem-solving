const { readFileSync } = require("fs");
const [numLines, ...lines] = readFileSync('./data.txt', 'utf8')
	.split("\n")
	.map(num => Number.parseInt(num, 10));


function defineEachNumberStage(number=0) {
  if (number === 0) {
    return "NULL";
  } else if (number % 2 === 0) {
    return number > 0 ? "EVEN POSITIVE" : "EVEN NEGATIVE";
  } else {
    return number > 0 ? "ODD POSITIVE" : "ODD NEGATIVE";
  }
}

function main(){
  const output = lines.slice(0, numLines).map(defineEachNumberStage);
  console.log(output.join("\n"));
}

main();