const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //vai ser impresso matheus nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) //vai ser impresso virginia 
console.log(filme.transmissoesHoje[2]) // vai ser impresso globo e 14h 

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // vai ser impresso o nome: "Juca", idade: 3, raça: "SRD"
console.log(gato) //vai ser impresso as informações do cachorro e gato junto que é nome: "Juba"
console.log(tartaruga) //vai ser impresso as informações do gato e junto o nome juba mas trocado o 'a' pelo 'o'

// os tres pontos é que vai pegar junto as informações interiores

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) //false 
console.log(minhaFuncao(pessoa, "altura")) //undefined
//deu isso por conta que não tinha nenhuma informação sobre a altura

const pessoa1 = {
    nome: "Amanda", 
    apelidos: ["amandita", "mandy", "mandinha"]}

    console.log(`Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa1.apelidos[0]}, ${pessoa1.apelidos[1]} ou ${pessoa1.apelidos[2]}`)

    const novo ={
        ...pessoa1,
        novoApelidos:["kenma", "manda"]
    }
    console.log(novo)

    const pessoa2 ={
        nome: "Nayla", 
        idade: 20,
        profissão: fotografia
    }

    function exer2(pessoa2) {
        const resultado = []
        resultado.push(objeto.nome)
         
        return resultado
      }
      
      console.log(exer2(pessoa2))