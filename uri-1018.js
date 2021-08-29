let taka = 503;
var bankNote = [1,2,5,10,20,50,100];
let notes =  bankNote.sort(function(a, b){
    return b-a;
});
console.log(taka);
var vagfol = Math.floor(taka/notes[0]);
console.log(`${vagfol} nota(s) de R$ 100,00`);
var lestTaka = taka % notes[0];

var vagfol = Math.floor(lestTaka/notes[1]);
console.log(`${vagfol} nota(s) de R$ ${notes[1]},00`);
var lestTaka = lestTaka % notes[1];

var vagfol = Math.floor(lestTaka/notes[2]);
console.log(`${vagfol} nota(s) de R$ ${notes[2]},00`);
var lestTaka = lestTaka % notes[2];

var vagfol = Math.floor(lestTaka/notes[3]);
console.log(`${vagfol} nota(s) de R$ ${notes[3]},00`);
var lestTaka = lestTaka % notes[3];

var vagfol = Math.floor(lestTaka/notes[4]);
console.log(`${vagfol} nota(s) de R$ ${notes[4]},00`);
var lestTaka = lestTaka % notes[4];

var vagfol = Math.floor(lestTaka/notes[5]);
console.log(`${vagfol} nota(s) de R$ ${notes[5]},00`);
var lestTaka = lestTaka % notes[5];

var vagfol = Math.floor(lestTaka/notes[6]);
console.log(`${vagfol} nota(s) de R$ ${notes[6]},00`);
var lestTaka = lestTaka % notes[6];

