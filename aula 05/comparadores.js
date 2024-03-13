const  variavel1 = 50
const variavel2 = 35

// igual ===
//verifica se os dois valores são iguais
console.log(variavel1 === (2 * 25)) // true
console.log(variavel1 === variavel2) // false
console.log(variavel1 === 50) // true

// diferente : !==
//verifica se os dois valores são diferentes
console.log( variavel1 !== variavel2) //true

// Maior >
//Verifica se o valor da esquerda é maior que o valor da direita
console.log(variavel1 > variavel2) // true
console.log(variavel2 > variavel1) //false

//Maior ou igual e >=
//Verifica se o valor da esquerda é maior ou igual ao valor da direita
console.log(variavel1 >= variavel2)
console.log(50 >= 35) //true
console.log(50 >= 50) //true
console.log(35 >= 50) //false

//Menor <
//Verifica se o valor da esquerda é menor que o valor da direita
console.log(variavel1 < variavel2) //false
console.log(23 < 90) //true

//Menor ou igual <=
//Verifica se o valor da esquerda é menor ou igual ao valor da direita
console.log(variavel1 <= variavel2) //false
console.log(variavel1 <= 50) //true