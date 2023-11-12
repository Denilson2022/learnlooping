
/* IMC - Índice de Massa Corporal */
/* const pessoa = [
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

 */

//--------------------------------outra formúla------------

function imc(altura, massa){

    const alt = altura
    const peso = massa

       
    const indiceMC = peso/(alt * alt)
    
    return indiceMC
}

function resultadoImc(indiceMC){
    switch (true) {
        case indiceMC > 40:
            return "Obesidade grau III";
        case indiceMC >= 35 && indiceMC <= 39.9:
            return "Obesidade grau II";
        case indiceMC >= 30 && indiceMC <= 34.9:
            return "Obesidade grau I";
        case indiceMC >= 25 && indiceMC <= 29.9:
            return "Sobrepeso";
        case indiceMC >= 18.6 && indiceMC <= 24.9:
            return "Normal";
        case indiceMC <= 18.5:
            return "Abaixo do normal";
        default:
            return "Condição não identificada";
    }
    
}




//---------------------------
/* function obterValorDoPlaceholder() {
    
    var nome = document.getElementById('nome');

    // Obter o valor do atributo placeholder
    var nomePlaceholder = nome.getAttribute('placeholder');

    // Fazer algo com o valor
    var novaDiv = document.createElement('div');
    
    // Adicionar um valor (texto) à div
    novaDiv.textContent = nomePlaceholder;
    
    // Adicionar a div ao corpo (ou a outro elemento)
    document.body.appendChild(novaDiv);

}    */ 
const meuPeso = document.getElementById('meuPeso').value;

const minhaAltura = document.getElementById('minha Altura').value;


const indiceMC = imc(minhaAltura, meuPeso)
const IM = resultadoImc(indiceMC)
//console.log(IM);

function obterNomeDoInput() {
    // Obter o valor do input
    var valorDoInput = document.getElementById('meuNome').value;

    // Fazer algo com o valor
    var novaDiv = document.createElement('div');
    
    // Adicionar um valor (texto) à div
    novaDiv.textContent = valorDoInput
    
    // Adicionar a div ao corpo (ou a outro elemento)
    document.body.appendChild(novaDiv);


}

//---------------------





