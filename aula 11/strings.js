/*
const nome = "Amanda"
const idade = 17
const frase = "Meu nome é " + nome + " e tenho " + idade + " anos."
console.log(frase)
*/
/*const nome = "Amanda"
const idade = 17
console.log(`Meu nome é ${nome} e tenho %{idade} anos.`)
*/

const nome = "Amanda Lima de Oliveira"
console.log(nome.length) // 23
/*
const frase = "OieEeEeEe!"
const fraseMinuscula = frase.toLowerCase()
// fraseMinuscula = oieeeee! 

const frase = "OieEeEeEe!"
const fraseMinuscula = frase.toUpperCase()
// fraseMinuscula = OIEEEEE! 
*/

const email = "     amandaldo@gmail.com     "
console.log(email.trim())
// "amandaldo@gmail.com"
/*
const frase = "Hoje comi doce"
console.log(frase.includes("doce")) //true
console.log(frase.includes("salgado")) //false 
*/
const frase = "Hoje comi doce, adoro salgado"
const novaFrase = frase.replaceAll("doce","salgado")
console.log(novaFrase)
//novaFrase = Hoje comi doce, adoro salgado