//crie um método para ler propiedades de um objeto e exibir somente as do tipo string que estão nesse objeto


const filme = {
      Titulo : 'Titanic',
      ano : 1998,
      Diretor: 'James Cameron',
      personagem : 'Jack'
}






function exibirPropiedade(obj){
    for(prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])

}

exibirPropiedade(filme)