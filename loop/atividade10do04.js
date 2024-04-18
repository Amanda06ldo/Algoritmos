
/*
for(let i = 0; i <= 10; i++){
    console.log(i)
}

for(numerosPares = 0; numerosPares <= 10; numerosPares += 2){
    console.log(numerosPares)
}

for(tabuada = 0; tabuada <= 50;tabuada++){
    console.log(tabuada * 5)
    }
    
   
for(soma = 1; soma <= 10; soma++){
    console.log(soma + soma)}

const readlineSync = require('readline-sync')
 let num1 = 0
 for(let i = 1; i <= 5; i++){
    pergunta = Number(readlineSync.question(`fale o numero ${i} numero:`))
    num1 = pergunta + num1
    if(i === 5){
        let resposta = num1/5
        console.log(resposta)
    }
 } 
 for(multiplosTres = 0; multiplosTres <= 20; multiplosTres += 2){
        if(multiplosTres % 3 !== 0){
            console.log(multiplosTres)
        }
    
} 
const readlineSync = require('readline-sync')
for(let i = 0 ; i <= 100; i++)
if(i % 3 && i % 5 === 0){
    console.log("FizzBuzz")
    } else if (i % 5 === 0){
        console.log("Buzz")
    } else if(i % 3 === 0){
            console.log("Fizz")
    } else 
        console.log(i)
    

const readlineSync = require('readline-sync')
nMaior = 0
nMenor = 9999999999999
 for(let i = 1; i <= 10;i++){
    pergunta = Number(readlineSync.question(`fale o numero: `))
    if (pergunta > nMaior){
        nMaior = pergunta
       
    } 
    if (pergunta < nMenor ){
        nMenor = pergunta
        
    }
}

console.log("O maior numero é",nMaior)
console.log("O menor numero é",nMenor)


const readlineSync = require('readline-sync')
fatorial = 1
 for(let i = 1; i <= 10;i++){
   fatorial = fatorial * i
   console.log(fatorial)


 }


let termoAnterior = 0;
let termoAtual = 1;

console.log("Sequência de Fibonacci:");

for (let i = 1; i <= 10; i++) {
    console.log(termoAtual);
    const proximoTermo = termoAnterior + termoAtual;
    termoAnterior = termoAtual;
    termoAtual = proximoTermo;
}

const readline = require('readline-sync');

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let chute;

console.log("Bem-vindo ao jogo de adivinhação!");

while (chute !== numeroAleatorio) {
    chute = Number(readline.question("Tente adivinhar o número (entre 1 e 100): "));
    tentativas++;

    if (chute < numeroAleatorio) {
        console.log("Tente um número maior.");
    } else if (chute > numeroAleatorio) {
        console.log("Tente um número menor.");
    }
}

console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);

const readline = require('readline-sync');

let resultadoUsuario;
let resultadoAleatorio;
let jogando = true;

console.log("Bem-vindo ao jogo de Cara ou Coroa!");

while (jogando) {
    resultadoUsuario = readline.question("Escolha cara ou coroa: ").toLowerCase();
    if (resultadoUsuario !== 'cara' && resultadoUsuario !== 'coroa') {
        console.log("Por favor, escolha entre cara ou coroa.");
        continue;
    }

    
    // Math.random() retorna um número aleatório entre 0 (inclusive) e 1 (exclusivo).
    // Portanto, há 50% de chance de o número aleatório ser menor que 0.5, resultando em 'cara',
    // e 50% de chance de ser maior ou igual a 0.5, resultando em 'coroa'.
    const numeroAleatorio = Math.random();
    if (numeroAleatorio < 0.5) {
        resultadoAleatorio = 'cara';
    } else {
        resultadoAleatorio = 'coroa';
    }

    console.log("O resultado é:", resultadoAleatorio);

    if (resultadoUsuario === resultadoAleatorio) {
        console.log("Você ganhou!");
        jogando = false;
    } else {
        console.log("Você perdeu. Tente novamente!");
    }
}

let somaImpares = 0;

for (let i = 1; i <= 100; i += 2) {
    somaImpares += i;
}

console.log("A soma dos números ímpares de 1 a 100 é:", somaImpares);

console.log("Tabuada de 1 a 10:");

for (let i = 1; i <= 10; i++) {
    console.log(`Tabuada do ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(); // Adiciona uma linha em branco para separar as tabuadas
}

const readline = require('readline-sync');

const frase = readline.question("Digite uma frase: ").toLowerCase();
let vogais = 0;
let consoantes = 0;

for (let i = 0; i < frase.length; i++) {
    const caractere = frase[i];
    if (caractere >= 'a' && caractere <= 'z'){
        if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
            vogais++;
        } else {
            consoantes++;
        }
    }
    
}

console.log("Número de vogais:", vogais);
console.log("Número de consoantes:", consoantes); */