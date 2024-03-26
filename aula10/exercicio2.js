function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

/*a) O que vai ser impresso no console?
vai ser impresso 10 e 50
b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?Não roda o codigo*/

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
/*a. Explique o que essa função faz e qual é sua utilidade
//Ele vai ver se a palavra cenoura está presente na frase e colocara a palavra em minusculo
b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`//true
     ii.  `CENOURA é bom pra vista`//true
     iii. `Cenouras crescem na terra` //false */

     