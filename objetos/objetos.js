
const professor = {
    nome: 'Vitor',
    idade: 27,
    tarefas : [' dar aula', 'Responder dúvidas'],
    email: 'vitor@gmail.com',
    contarPiadas: function(){
        console.log('é pa oq')
    }
    
}
    console.log(professor.contarPiadas)
    console.log(professor["email"]) 
    console.log(professor["nome"] = 'Mika')
    console.log(professor["email"] = `profmika@gmail.com`)

const filme = {
    nome: 'La La Land: Cantando Estações',
    diretor: 'Damien Chazelle',
    ano:2017,
    elenco: ['Emma Stone','Ryan Gosling', 'John Legend'],
    viu_ou_não: 'sim'
}
    console.log(filme.nome)
    console.log(filme.diretor)
    console.log(filme["ano"] = `2017`)
    console.log(filme[" elenco"] = `Emma Stone','Ryan Gosling', 'John Legend`)
    console.log(filme["viu_ou_não"] = `sim`)


    const pessoa = {
        nome: 'Amanda',
        idade: 17,
        genero_musical_preferido:'R&B',
    }

    console.log('O nome da pessoa é',pessoa.nome,'ela tem',pessoa.idade, 'anos e gosta muito de', pessoa.genero_musical_preferido)
   /* console.log(`O nome da pessoa é ${pessoa.nome},ela tem ${pessoa.idade}, anos e gosta muito de ${pessoa.genero_musical_preferido}`)*/

   const donoDoPet = {
    nome:'Vitor Hugo',
    pet: {
        nomeDoPet: 'Wanda',
        raça:'Vira-lata',
        idade: 1
    }
   }
   console.log(donoDoPet.pet.nomeDoPet)