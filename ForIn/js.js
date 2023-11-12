const família = [
    {
        nome: 'Denilson', 
        papel: 'noivo', 
        profissao: 'advogado'
    },
    {
        nome: 'Ellen', 
        papel: 'noiva', 
        profissao: 'nutricionista'
    }
   ]



for (let pessoa in família){
 console.log(família[pessoa].profissao);
}