
/*const professor = {
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
   console.log(`O nome da pessoa é ${pessoa.nome},ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.genero_musical_preferido}`)

   const donoDoPet = {
    nome:'Vitor Hugo',
    pet: {
        nomeDoPet: 'Wanda',
        raça:'Vira-lata',
        idade: 1
    }
   }
   console.log(donoDoPet.pet.nomeDoPet)

   const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS","CSS","HTML"]
   }
    console.log(curso.linguagens[0])

    const professores = [
    {nome: "Andrei", modulo: 1 },
    {nome: "Vitor", modulo: 2 },
    {nome: "Mina", modulo: 3 },
]
console.log(professores[1].nome)

const cursos = {
    nome: "Noturno Frontend",
    linguagens: ["JS","CSS","HTML"]
   }
    
    cursos.numeroEstudantes = 50
    cursos["numeroEstudantes"] = 50
    console.log(cursos) 

    const filme = {
        nome: 'La La Land: Cantando Estações',
        diretor: 'Damien Chazelle',
        ano:2017,
        elenco: ['Emma Stone','Ryan Gosling', 'John Legend'],
        viu_ou_não: 'sim'
    }
        filme.personagens = ["Mia", "Sebastian Wilder","Keith"]
        console.log(`A atriz ${filme.elenco[0]},ela faz a personagem ${filme.personagens[0]} no filme ${filme.nome}`)
        console.log(`O ator ${filme.elenco[1]},ele faz o personagem ${filme.personagens[1]} no filme ${filme.nome}`)
        console.log(`O ator ${filme.elenco[2]},ele faz o personagem ${filme.personagens[2]} no filme ${filme.nome}`)
        filme.elenco[0] = "Xuxa"
        console.log(filme.elenco)
        console.log(`A atriz ${filme.elenco[0]},ela faz a personagem ${filme.personagens[0]} no filme ${filme.nome}`)
        console.log(filme)

        const usuario = {
            nome: "Prof",
            idade:25,
            email:"Prof@senacrs.com.br",
            cidade:"São Paulo",
           
        }
        const novoUsuario = {
        ...usuario,
        nome:"João",
        idade:28
    }
    console.log(novoUsuario)

    const listaDeNome = ["Mika","Paula","Vitor"]
    const copiaListaDeNomes = [... listaDeNome]
    console.log(copiaListaDeNomes)
*/

    const pessoa = {
        nome: 'Amanda',
        idade: 17,
        genero_musical_preferido:'R&B',
    }   

function exer4(objeto){
    pessoa.comidaPreferida = ["Lasanha","Sushi"]
    const novaPessoa ={
        ...objeto,
        melhorAmiga:"Nayla",
        idade: 17
    }
console.log("O nome da pessoa é",pessoa.nome," e suas comidas preferidas são",pessoa.comidaPreferida[0],"e",pessoa.comidaPreferida[1], "e sua melhor amiga é",novaPessoa.melhorAmiga,"e sua idade é",novaPessoa.idade)
}
exer4(pessoa)