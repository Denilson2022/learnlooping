const família = [
    {
        nome: 'Denilson', 
        papel: 'noivo', 
        profissão: 'advogado'
    },
    {
        nome: 'Ellen', 
        papel: 'noiva', 
        profissão: 'nutricionista'
    }
   ]


for (let pessoa in família){
 console.log(família[pessoa].nome); 
}