// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./number.txt', 'utf8'); //this test file check

const lines = input.split("\n");

const [N1, N2, N3, N4] = lines.shift().split(' ').map(item => parseFloat(item).toFixed(1));

      
const media = parseFloat((N1 * 2 + N2 * 3 + N3 * 4 + N4 * 1) / 10);
console.log("Media: " + media.toFixed(1));

if (media >= 7.0) {
  console.log("Aluno aprovado.");
} 
else if(media < 5.0){
  console.log("Aluno reprovado.");
}
else if(media >= 5.0 && media < 7.0){
  console.log("Aluno em exame.");
  const nextExam = lines.shift();
  console.log(`Nota do exame: ${nextExam}`);

  const finalAverage = parseFloat((parseFloat(nextExam) + parseFloat(media))/2);
  
  if (finalAverage >= 5.0) {
    console.log("Aluno aprovado.");
  }else if(finalAverage < 5.0){
    console.log('Aluno reprovado.');
  }

  console.log(`Media final: ${finalAverage.toFixed(1)}`);
}
