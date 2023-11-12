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


  const nom = família.filter(value => {
    if(value.nome == 'Denilson'){ 
        return value
} else if (value.nome == 'Ellen'){ return value

   }
}
  )

   console.log(nom);