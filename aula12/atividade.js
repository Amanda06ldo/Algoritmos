/*let array
console.log('a. ', array) // indefinido

array = null
console.log('b. ', array) //anula

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
console.log('c. ', array.length) // vai aparecer 11

let i = 0 
console.log('d. ', array[i]) // vai aparecer 3

array[i+1] = 19 
console.log('e. ', array) // vai mudar o 4 pelo 19

const valor = array[i+6] 
console.log('f. ', valor) // vai aparecer 9 */

/*const readlineSync = require('readline-sync');

const frase = readlineSync.question("Digite uma frase: ");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//vai trocar o a pelo i,vai ficar tudo em maiusculo e vai aparecer o tamanho da frase (27) */

/*
const readlineSync = require('readline-sync');
const nome = readlineSync.question("Insira o seu nome: ")
const gmail = readlineSync.question("Insira o seu gmail: ")
console.log(`O e-mail ${gmail} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)
*/
/* const readlineSync = require('readline-sync');
let comidas = ["Pizza", "Lasanha", "Miojo", "Tacos", "Sushi"]
console.log(comidas)
console.log(`Essas são as minhas comidas preferidas:
    ${comidas[0]}
    ${comidas[1]}
    ${comidas[2]}
    ${comidas[3]}
    ${comidas[4]}`
    ) */
     /* console.log("\nb)Essas são as minhas comidas preferidas:")
     console.log(comidas.join("\n"))*/
     /*const comidaNova = readlineSync.question("Qual sua comida preferida? ")
     comidas.splice(1,1)
     comidas.push(comidaNova)
     console.log(comidas) */
    /*
    const readlineSync = require('readline-sync');
    let  listaDeTarefas = []
    const tarefa1 = readlineSync.question("Diga uma tarefa que precisa fazer: ")
    const tarefa2 = readlineSync.question("Diga uma segunda tarefa que precisa fazer: ")
    const tarefa3 = readlineSync.question("Diga a ultima tarefa que precisa fazer: ")
    listaDeTarefas.push(tarefa1)
    listaDeTarefas.push(tarefa2)
    listaDeTarefas.push(tarefa3)
    console.log(listaDeTarefas)
    let tarefaConcluida = readlineSync.question("Diga uma tarefa que voce ja fez: 1,2 ou 3 ")
    let excluir = tarefaConcluida - 1
    listaDeTarefas.splice(excluir,1)
    console.log(listaDeTarefas) 
    */
    