/* 
for(inicio; teste; incremento){

} 
*/
/* 
for(var c = 1; c<= 10; c++){
    console.log(`Laço for ${c}`);
} */


let minhaCarteira = [
    'cartão do banco',
    'cartões profissionais',
    'dinheiro',
    'moedas'
]

for(let i = 0; i < minhaCarteira.length; i++){
    console.log(`${i+1}. ${minhaCarteira[i]}`);
    if(minhaCarteira[i] === 'dinheiro') break
}

