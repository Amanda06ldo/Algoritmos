const idade = 17
const idadeAmigo = 20
const idadeMaior = false
console.log('Sua idade é maior do que a do seu melhor amigo?',idadeMaior)
const subtracao =  idadeAmigo - idade
console.log(subtracao)

const par = 14
const numero2 = 2

let divisao = par % numero2
console.log(divisao)


//c) Todos dão zero

const impar = 19
divisao = impar % numero2
console.log(divisao)
//d) Todos dão um

// Idade do usuário em anos
let idadeAnos = 25;

// a) Idade do usuário em meses
let idadeMeses = idadeAnos * 12;
console.log("Idade do usuário em meses:", idadeMeses);

// b) Idade do usuário em dias
let idadeDias = idadeAnos * 365;  // Considerando anos não bissextos
console.log("Idade do usuário em dias:", idadeDias);

// c) Idade do usuário em horas
let idadeHoras = idadeDias * 24;
console.log("Idade do usuário em horas:", idadeHoras);

// Exercício 4

// Duas variáveis com números
let numero1 = 20;
let numero3 = 5;

// Operações e impressão
console.log("O primeiro número é maior que o segundo?", numero1 > numero3);
console.log("O primeiro número é igual ao segundo?", numero1 === numero3);
console.log("O primeiro número é divisível pelo segundo?", numero1 % numero3 === 0);
console.log("O segundo número é divisível pelo primeiro?", numero3 % numero1 === 0);