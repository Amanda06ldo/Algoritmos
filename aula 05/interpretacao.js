
//Exercicio 1


const bool1 = true 
const bool2 = false 
const bool3 = !bool2 

let resultado = bool1 && bool2 
console.log("a. ", resultado) //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2) //true
 console.log("c. ", resultado) 
console.log("d. ", typeof resultado) //boolean

//Exercicio 2
let primeiroNumero = 100
let segundoNumero = 43

const soma = primeiroNumero + segundoNumero

console.log(soma)
//O erro é por conta que colocaram as aspas nos numeros
