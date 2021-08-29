// const { parse } = require("path");

var bankNote = parseFloat(576.73) * 1000;

var notes = [100000, 50000, 20000, 10000, 5000, 2000];
var coins = [1000, 500, 250, 100, 50, 10];


console.log("NOTAS:");
for(var i = 0; i < notes.length; i++){
    note = bankNote/notes[i];
    console.log(`${parseInt(note)} nota(s) de R$ ${(notes[i]/1000).toFixed(2)}`);
    bankNote = bankNote % notes[i];
}

console.log("MOEDAS:");
for (var i = 0; i < coins.length; i++) {
    var coin = parseFloat(bankNote / coins[i]);
    console.log(`${parseInt(coin)} moeda(s) de R$ ${(coins[i]/1000).toFixed(2)}`);
    bankNote = (bankNote % coins[i]);
    // bankNote = (bankNote % coins[i]) + 0.00001;
}

// lastCoin = parseFloat(bankNote / coins[coins.length-1]);
// console.log(`${parseInt(lastCoin)} moeda(s) de R$ ${(coins[coins.length-1]).toFixed(2)}`);

