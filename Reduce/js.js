

/* O Reduce serve para somar  */
const pessoa = [
    {
        nome: 'Denilson',
        profissao: 'advogado',
        idade: 47
    },
    {
        nome: 'Ellen',
        profissao: 'nutricionista',
        idade: 27
    }
]

const totalIdade = pessoa.reduce((sum, item) => {
    return sum + item.idade
}, 0)

console.log(totalIdade);
