// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = require('fs').readFileSync(
  './demo_input/lab_experiments.txt',
  'utf8',
);
var lines = input.split('\n');

function main() {
  const numTests = parseInt(lines[0]);
  let totalAnimals = 0;
  let coelhos = 0;
  let ratos = 0;
  let sapos = 0;

  for (let i = 1; i <= numTests; i++) {
    const [amount, animalType] = lines[i].split(' ');
    const amountInt = parseInt(amount);
    totalAnimals += amountInt;

    if (animalType === 'C') {
      coelhos += amountInt;
    } else if (animalType === 'R') {
      ratos += amountInt;
    } else if (animalType === 'S') {
      sapos += amountInt;
    }
  }

  const percentCoelhos = (coelhos / totalAnimals) * 100;
  const percentRatos = (ratos / totalAnimals) * 100;
  const percentSapos = (sapos / totalAnimals) * 100;

  console.log(`Total: ${totalAnimals} cobaias`);
  console.log(`Total de coelhos: ${coelhos}`);
  console.log(`Total de ratos: ${ratos}`);
  console.log(`Total de sapos: ${sapos}`);
  console.log(`Percentual de coelhos: ${percentCoelhos.toFixed(2)} %`);
  console.log(`Percentual de ratos: ${percentRatos.toFixed(2)} %`);
  console.log(`Percentual de sapos: ${percentSapos.toFixed(2)} %`);
}

main();
