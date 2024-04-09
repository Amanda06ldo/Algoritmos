
const respostaDoUsuario = "90" 
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) { 
    console.log("Passou no teste.") 
} else {
     console.log("Não passou no teste.") 
    }

/*
// a) Explique o que o código faz. Qual o teste que ele realiza? 
// O codigo diz passou no teste, quando uma pessoa poe um numero que ao ser dividido por 2 o resto é zero, e se o numero tiver resto ele imprime não passou no teste
//b) Para que tipos de números ele imprime no console "Passou no teste"? 
//numeros divididos por 2 que tem o resto 0

//c) Para que tipos de números a mensagem é "Não passou no teste"?
//numeros que quando divididos por 2 não tem resto 0
//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

```jsx
let fruta
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima?
// O código serve para imprimir o preço da fruta e a fruta que desejar

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// será impresso 2.25 o valor da maçã

//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//O codigo não ira funcionar

const numero = Number(("50"))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//) O que a primeira linha está fazendo?
// esta criando uma variavel com o valor de number

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// o numero 10 ira aparecer 'esse número passou no teste', o numero -10 ira aparecer 'Essa mensagem é secreta!!!'
//c) Haverá algum erro no console? nao
*/
