const readlineSync = require('readline-sync');
const nome = readlineSync.question("Qual e o seu nome?")
const idade = readlineSync.question("Qual e a sua idade?")
const cidade = readlineSync.question("Qual e o sua cidade?")

console.log("Nome: " + nome)
console.log("Idade: " + idade)
console.log("cidade: " + cidade)