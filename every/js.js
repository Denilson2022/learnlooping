const familia = [
    {
        nome: 'Denilson',
        profissao: 'advogado',
        idade: 47
    },
    {
        nome: 'Ellen',
        profissao: 'nutricionista',
        idade: 27
    },
    {
        nome: 'Ellenilsa',
        profissao: 'criança',
        idade: 5
    }
]

const maiorIdade = valor => valor.idade >= 18

const todosAdultosNaFamilia = familia.every(maiorIdade)

console.log(todosAdultosNaFamilia);