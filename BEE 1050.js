const input       = "32";
var   lines       = input.split('\n')
const inputNumber = parseInt(lines.shift());

const data = {
    61:"Brasilia",
    71:"Salvador",
    11:"Sao Paulo",
    21:"Rio de Janeiro",
    32:"Juiz de Fora",
    19:"Campinas",
    27:"Vitoria",
    31:"Belo Horizonte",
};
let output = "DDD nao cadastrado";
if (data[inputNumber]) {
    output = data[inputNumber];
}
console.log(output);