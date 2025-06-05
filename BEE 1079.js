const { readFileSync } = require('fs');

function weightAverage(A = 0, B = 0, C = 0) {
  return (2 * A + 3 * B + 5 * C) / 10;
}

function main() {
  const input = readFileSync('/dev/stdin', 'utf8');
  // const input = readFileSync('./files/wight_average.txt', 'utf8');
  const lines = input.trim().split('\n').slice(1);
  const responses = lines.map((line) => {
    const [A, B, C] = line.split(' ').map(Number.parseFloat);
    return weightAverage(A, B, C).toFixed(1);
  });

  console.log(responses.join('\n'));
}

main();
