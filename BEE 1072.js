var input = require('fs').readFileSync('./range.txt', 'utf8');
const lines = input.split("\n");

  // Read the value of N
  const numberCount = parseInt(lines[0]);

  let numbersInRange = 0;
  let numbersOutOfRange = 0;

  // Iterate over each test case
  for (let i = 1; i <= numberCount; i++) {
    // Read the value of X
    const X = parseInt(lines[i]);

    // Check if X is within the interval [10, 20]
    if (X >= 10 && X <= 20) {
      numbersInRange++;
    } else {
      numbersOutOfRange++;
    }
  }

  // Print the results
  console.log(`${numbersInRange} in`);
  console.log(`${numbersOutOfRange} out`);