
/* IMC - Índice de Massa Corporal */
const pessoa = [
    {
        nome: "Denilson", altura: 1.75, peso: 82
    },
    {
        nome: "Ellen", altura: 1.65, peso: 52
    },
]


var pesD = pessoa[0].peso
var altD = pessoa[0].altura

var pesE = pessoa[1].peso
var altE = pessoa[1].altura

 const altQuadradoD = altD ** 2
 const altQuadradoE = altE ** 2

const imcD = pesD/altQuadradoD
const imcE = pesE/altQuadradoE

const Denilson = (` ${pessoa[0].nome} tem o IMC de ${imcD.toFixed(2)}`);
const Ellen = (` ${pessoa[1].nome} tem o IMC de ${imcE.toFixed(2)}`);

console.log(`${Denilson} e${Ellen}`);