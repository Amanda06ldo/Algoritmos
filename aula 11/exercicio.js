/*const nome = "Amanda"
const cor = "roxo"
const cor2 = "azul"
const frase = "Meu nome é " + nome + " e minha cor favorita é " + cor + " e também " + cor2 
console.log(frase)*/

/*
const nome = "Amanda"
const cor = "roxo"
const cor2 = "azul"
console.log(`Meu nome é ${nome} e minha cor favorita é ${cor} e também ${cor2}`)

 const frase = "Meu nome é Amanda e minha cor favorita é roxo e também azul"
const fraseMinuscula = frase.toUpperCase()
console.log(fraseMinuscula)
const novaFrase = frase.replaceAll("o","i")
console.log(novaFrase)
console.log(frase.length) */

/* const numeros = [1, 2, 3, 4, 5, 6]
console.log(numeros.length)
numeros.push(7)
console.log(numeros)
console.log(numeros.splice(3,2))
console.log(numeros.length) */

const personagensTheBoys = ["The Deep", "Billy Butcher", "The Frenchman", "Black Noir", "The Homelander", "Starlight", "A-Train", "Queen Maeve", "Hughie Campbell", "Mother's Milk", "Kimiko Miyashiro"]

function escolherPersonagem() {
 let n = Math.floor(Math.random() * (personagensTheBoys.length))
 return personagensTheBoys[n]

}
console.log("Meu personagem é:", escolherPersonagem())