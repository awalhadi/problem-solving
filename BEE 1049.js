var input = "invertebrado anelideo onivoro";
var lines = input.split('\n');
const firstItem = lines.shift();
const secondItem = lines.shift();
const thirdItem = lines.shift();

// const [firstItem, secondItem, thirdItem] = lines.shift().split(' ');
const data = {
  vertebrado:{
    ave     : {
      carnivoro: "aguia",
      onivoro  : "pomba",
    },
    mamifero: {
      onivoro  : "homem",
      herbivoro: "vaca",
    },
  },
  invertebrado:{
    inseto  : {
      hematofago: "pulga",
      herbivoro  : "lagarta",
    },
    anelideo: {
      hematofago: "sanguessuga",
      onivoro  : "minhoca",
    },
  },
};

console.log("data:", data?.[firstItem]?.[secondItem]?.[thirdItem]);
