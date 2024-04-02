/* const listaDeCompras = ["batata", "alface","queijo" ]
const listaDeNumerosMega = [2, 13, 26, 35, 41, 60]
const segundoItem = listaDeCompras[2] //tomate
console.log(segundoItem) */
 /*
 const listaDeArtista = ["Sabrina Carpenter", "Olivia Rodrigo", "Tyler, the Creator" , "Alt j", "The Weekend"]
const listaDeNumerosMega = [0, 1, 2, 3, 4]
const segundoItem = listaDeArtista[2] 
console.log(segundoItem)
const homensAranha = ["Gwen", "Hobie", "Miles", "Pavitr"]
console.log(homensAranha.length)  //4

const serieBons = ["Game of Thrones", "House of dragons"]
console.log(serieBons.includes("Game of Thrones"))
console.log(serieBons.includes("Breaking Bad"))

const numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros)//[1, 2, 3, 4]

numeros.push(5, 6, 7)
console.log(numeros) //[1, 2, 3, 4, 5, 6, 7]
const meusPeixes = ["palhaço", "mandarim", "esturjão"]
meusPeixes.pop()
console.log(meusPeixes) // ["palhaço", "mandarim"] 
*/

//O método splice(i, n) remove n elementos à partir da posição i do array
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
//indices (i) 0 1 2 3 4 5 6 7
letras.splice(2, 1)
//letras = ["A", "B", "D", "E", "F", "G", "H"]
//indices (i) 0 1 2 3 4 5 6 
letras.splice(3,2) //letras = ["A", "B", "D", "G", "H"]
console.log(letras.splice(3,2))
console.log(letras.splice(2, 1))