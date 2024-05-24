 //Responda todas as questões abaixo:

/*Javascript é a mesma coisa que Java.
a)Verdadeiro
b)Falso 
resposta certa é B)falso */

/*Como se declara uma variável em Javascript?
a) const carName
b) variable carName
c) new carName
Resposta certa é a) const carName */

/*Que operador é usado para dar valor a uma variável?
a) =
b) -
c) *
d) x
 Resposta certa é a) = */

/* Diga o que a seguinte equação retorna: 10 > 9
 a) false
 b) true
 c) NaN
Resposta certa é b) true */

/* Javascript é case-sensitive (que diferencia maiúsculas de minúsculas)?
 a) Sim
 b) Não
 Resposta certa é a) Sim */

/* Como se cria uma função em Javascript?
 a) function myFunction()
 b) function:myFunction()
 c) function = myFunction()
 Resposta certa é a) function myFunction() */

/* Como se invoca uma função chamada "myFunction"?
a) call myFunction()
b) function MyFunction()
c) myFunction ()
 Resposta certa é c) myFunction () */

/* Como se escreve o condicional IF em Javascript?
a) if(i===5)
b) if i = 5 then
c) if i =5
d) if i == 5 then
 Resposta certa é a) if(i===5) */

/* Como escrever o condicional IF para executar um código se "i" não for igual a 5?
a) if(i <> 5)
b) if (i != 5)
c) if i =! 5 then
d) if i <>5
 Resposta certa é  b) if (i != 5) */

/* Como um WHILE começa?
a) while i=1 to 10
b) while (i <= 10)
c) while (i<= 10;i++)
 Resposta certa é b) while (i <= 10) */

/*Como um LOOP FOR começa?
a) for i=1 to 5
b) for (i=0;i<=5)
c) for (i<=5;i++) 
d) for (i=0;i<=5;i++)
 Resposta certa é d) for (i=0;i<=5;i++) */

/*Como se adiciona um comentário em Javascript?
a)<!--Este é um comentário-->
b)//Este é um comentário
c)"Este é um comentário"
 Resposta certa é b)//Este é um comentário */

/*Como adicionar um comentário com mais de uma linha?
a)/*Este comentário tem
mais de uma linha*/
/*b)<!--Este comentário tem
mais de uma linha-->
c)"Este comentário tem
mais de uma linha"
Resposta certa é a) */

/*Qual é a maneira correta de escrever um array?
a)const colors = ['red','green','blue']
b)const colors = 'red','green','blue'
c)const colors = [1:'red',2:'green',3:'blue']
d)const colors = ['red'],['green'],['blue']
Resposta certa é a) const colors = ['red','green','blue'] */

/*Usando um comando em Javascript, como você arredondaria o número 7.25?
Usamos para arredondar a função Math.round(), por exemplo:
let number = 7.25;
let novoNumber = Math.round(number);
console.log(novoNumber);  */ 

//Variáveis:

/*Qual é a maneira correta de nomear uma variável?
a) MYNAME
b) myname
c) my Name
d) variavel
e) myName 
A resposta certa é e) myName
*/

/*Qual o valor de uma variável que está vazia?
a) NaN
b) undefined
c) ERROR
A resposta certa é b) undefined
*/
/*Crie uma variável chamada carName e atribua o valor Maverick a ela:
const carName = "Maverick"
*/


/*Criar uma variável chamada x e atribua o valor 50 a ela.
const x = 50
*/

/*Exiba a soma de 5 + 10 usando duas variáveis x e y.
const x = 5;
const y = 10;
const soma = x + y;
console.log("A soma de 5 + 10 é " + soma); */

/*Complete o código criando uma variável chamada z, atribuia x + y a ela e exiba o resultado:

let x = 5;
let y = 10;
let z = x + y;
console.log(z)
*/

/*Declare estas três variáveis em UMA ÚNICA LINHA com estes nomes e valores específicos:

firstName = "John"
lastName = "Doe"
age = 35
let { firstName, lastName, age } = { firstName: "John", lastName: "Doe", age: 35 };
*/


//Operadores:

/*Multiplique 10 por 5 e exiba o resultado.
let resultado = 10 * 5;
console.log(resultado);
*/

/*Exiba o resto da divisão de 15 por 9.
const resto = 15 % 9;
console.log(resto);*/

/*Use o operador de atribuição correto para fazer x ser igual a 15 (o mesmo que escrever x = x + y).

x = 10
y = 5
x _ y 

const x = 10;
const y = 5;
x += y;
console.log(x)
*/

/*Usa o operador de atribuição correto para fazer x ser igual a 50 (o mesmo que escrever x = x * y).

x = 10
y = 5
x _ y

let x = 10;
let y = 5;
x *= y;
console.log(x)
*/

//Tipos de Dados:

/*Use comentários para descrever o tipo correto de cada uma das variáveis abaixo:

let length = 16;
let lastName = "Johnson"; 
const x = {
  firstName: "John",
  lastName: "Doe"
};

A primeira é length que é uma variável do tipo número (number), por conta que tem um valor numérico dentro da variável
O segundo é lastName que é uma variável do tipo string, por conta que tem texto entre aspas dentro da variável
O terceiro é x que é um const do tipo objeto (object), que tem uma estrutura de dados que pode conter varios valores, acessíveis por meio de chaves.
*/

//Funções:

/*Execute a função chamada myFunction:

function myFunction() {
  alert("Hello World!");
}
myFunction()
*/

/*Complete o código, criando uma função chamada myFunction:

function myFunction(){
    console.log("Hello World")
}
*/



/*Complete o código, fazendo com que a função RETORNE a palavra "Hello":

function myFunction() {
  return "Hello";
}

console.log(myFunction(),"World")
 */

//Objetos:

/*Mostre a informação "John"em um console.log, extraindo essa informação do objeto:

const person = {
  firstName: "John",
  lastName: "Doe"
};
console.log(person.firstName)
*/

/*Adicione a seguinte propriedade e valor ao objeto person: country: Norway.

const person = {
  firstName: "John",
  lastName: "Doe" 
  country: "Norway"
};
*/

/*Crie um objeto chamado person com name = John e age = 50.
Em seguida, acesse o objeto para exibir a mensagem "John tem 50 anos.".
const person = {
  name: "John",
  age: 50
};
console.log(`${person.name} tem ${person.age} anos.`);
*/

//Strings:

/*Complete o o código usando a propriedade correta para exibir o comprimento de txt:

let txt = "Hello World!";
let x = txt.length;
console.log(x);

*/
/*Concatene as duas strings para exibir a mensagem "Hello World!":

let str1 = "Hello ";
let str2 = "World!";
let mensagem = str1 + str2;
console.log(mensagem);
*/

/*Converta o texto para um texto EM MAIÚSCULAS:

let txt = "Hello World!";
let txtMaiusculo = txt.toUpperCase();
console.log(txtMaiusculo);
*/

/*Use o método correto de String para substituir a palavra "Hello" pela palavra "Welcome".
let txt = "Hello World"; 
let novoTxt = txt.replace("Hello", "Welcome");
console.log(novoTxt);
*/


//Arrays:

/*Mostre o valor "Volvo" do array "cars":

const cars = ["Saab", "Volvo", "BMW"];
*/


/*Mude o primeiro item de "cars" para "Ford":

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[1])
*/


/*Mostre o número de itens que há no array usando a propriedade certa:

const cars = ["Volvo", "Jeep", "Mercedes"];
const numeroDeCars = cars.length;
console.log(numeroDeCars);
*/

/*Use o método correto de Array para remover o último item do array fruits.
const fruits = ["Banana", "Orange", "Apple"];
fruits.pop()
console.log(fruits)
*/



/*Use o método correto de Array para adicionar "Kiwi" ao array fruits.
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi")
console.log(fruits)
*/


/*Use o método splice() para remover "Orange" e "Apple" do array fruits.
const fruits = ["Banana", "Orange", "Apple"];
fruits.splice(1, 2);
console.log(fruits); 
*/


//Comparadores:

/*Escolha o operador de comparação correto para mostrar verdadeiro quando x for maior que y.

x = 10;
y = 5;
console.log(x > y)*/


/*Escolha o operador de comparação correto para alertar verdadeiro quando x for igual a y.

x = 10;
y = 5;
if(x == y) {
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}

*/
/*Escolha o operador de comparação correto para alertar verdadeiro quando x não for igual a y.

x = 10;
y = 5;
if (x !== y) {
    console.log("Verdadeiro")
} else {
    console.log ("Falso")
}
*/

//Condicionais:
/*
Crie um código para mostrar "Hello World" se x for maior que y:
let x = 20;
let y = 15;

if (x > y) {
    console.log("Hello World");
}
*/


/*Crie um código para mostrar "Hello World" se x for maior que y,e se não for, imprima "Goodbye":
const x = 5;
const y = 15;

if (x > y) {
    console.log("Hello World");
} else {
    console.log("Goodbye");
}
*/

//Switch:

/*Crie uma declaração switch que irá mostrar "Olá" se fruits for "banana" e "Bem-vindo" se fruits for "maçã".
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome da fruta: ', (fruits) => {
  switch(fruits.toLowerCase()) {
    case "banana":
      console.log("Olá");
      break;
    case "maçã":
      console.log("Bem-vindo");
      break;
    default:
      console.log("Não reconheço essa fruta");
  }
  
  rl.close();
});
*/

/*Adicione uma seção que irá alertar "Nem um nem outro" se fruits não for nem "banana" nem "maçã".
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma fruta: ', (fruta) => {
  if (fruta === "banana") {
    console.log("Você escolheu uma banana!");
  } else if (fruta === "maçã") {
    console.log("Você escolheu uma maçã!");
  } else {
    console.log("Nem uma nem outra.");
  }

  rl.close();
});
 */

//Loop For:
/*
Crie um loop for que conte de 0 até 9.
for (let i = 0; i < 10; i++) {
    console.log(i);
}
*/

/*Crie um loop for que percorra todos os itens do array:
const fruits = ["Apple", "Banana", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
*/


//Loop While:

/*Crie um loop que continua executando enquanto i for menor que 10. 
let i = 0;
while (i < 10) {
    console.log("O valor de i é:", i);
    i += 1;
}
*/

/*Crie um loop que continua executando enquanto i for menor que 10, mas incremente i com 2 a cada vez. 
let i = 0;

while (i < 10) {
  console.log(i);
  i += 2;
}
*/





