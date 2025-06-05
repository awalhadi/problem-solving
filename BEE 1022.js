// const input = require('fs').readFileSync('./demo_input/1022.txt', 'utf8');
// const lines = input.split('\n').map(line => line.trim())
const [N, ...input] =require('fs').readFileSync("./demo_input/1022.txt", "utf8").split("\n", 1 + 1e4)
// console.log(N, input);

function transformExpression(equation) {
  // Remove all whitespace from the equation
  equation = equation.replace(/\s+/g, "");

  // Match the equation against the regular expression from "1 / 2 + 3 / 4" to "1,2,+3,4"
  const matches = equation.match(/(\d+)\/(\d+)([+\-*/])(\d+)\/(\d+)/);
  // Check if there are matches
  if (matches) {
      // Extract the matched groups and return them
      return matches.slice(1, 6);
  } else {
      // Return null if no matches are found
      return null;
  }
}

const dataInput = input.map(equation => transformExpression(equation));
// // getting except first item
dataInput.forEach(element => {
  const [N1, N2, operator, N3, N4] = element
  console.log(`${N1}/${N2} ${operator} ${N3}/${N4} = ${N1/N2} ${operator} ${N3/N4}`);
});
// console.log(itemsExceptFirst);
// console.log(lines)