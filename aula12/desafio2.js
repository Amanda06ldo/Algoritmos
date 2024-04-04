/*function soma(n1,n2){
    let soma1 = n1 + n2

if (n1 >=0){
    n1 = true
}if (n2 >=0){
    n2 = true
}
if( n1 && n2 === true){
    return soma1
}}
console.log(soma(4,7)) */

/*function multiplicacao(n1,n2){
    let soma1 = n1 * n2

if (n1 %2 === 0){
    n1 = true
}if (n2 %2 === 0){
    n2 = true
}
if( n1 && n2 || true){
    return soma1
}}
console.log(multiplicacao(4,7)) */

/*function divisao(n1,n2){
    let soma1 = n1 / n2

if (n2 %2 === 0){
    return 'seu divisor é zero'
} else {
    return divisao
} }
console.log(divisao(28,14 )) */


//Array em Ordem Inversa: Escreva um programa que imprima um array em ordem inversa.

function imprimirArrayInversa(array) {
    // Verifica se o array está vazio
    if (array.length === 0) {
        return [];
    } else {
        // Seleciona o primeiro elemento do array
        const first = array[0];
        // Seleciona os elementos restantes do array (exceto o primeiro)
        const rest = array.slice(1);
        // Inverte os elementos restantes do array recursivamente
        const reversedRest = imprimirArrayInversa(rest);
        // Adiciona o primeiro elemento ao final do array invertido
        reversedRest.push(first);
        // Retorna o array invertido
        return reversedRest;
    }
}

console.log(imprimirArrayInversa([1, 2, 3, 4, 5]));   // Saída: [5, 4, 3, 2, 1]

//Array sem o Primeiro e Último Elemento: Escreva um programa que imprima um array com todos os elementos de um array original, exceto o primeiro e o último.

function imprimirArraySemExtremos(array) {
    array.pop(); // Remove o último elemento
    array.splice(0, 1); // Remove o primeiro elemento
    return array;
}

console.log(imprimirArraySemExtremos([1, 2, 3, 4, 5]));   // Saída: [2, 3, 4]

//Vogais em uma String: Escreva um programa que imprima todas as vogais de uma string.

function imprimirVogais(str) {
    const vogaisList = ['a', 'e', 'i', 'o', 'u'];
    const lowerCaseStr = str.toLowerCase();
    return lowerCaseStr.split('').filter(char => vogaisList.includes(char)).join('');
}

console.log(imprimirVogais("Hello World"));   // Saída: "eoo"

//Consoantes em uma String: Escreva um programa que imprima todas as consoantes de uma string.

function imprimirConsoantes(str) {
    const vogaisList = ['a', 'e', 'i', 'o', 'u'];
    const lowerCaseStr = str.toLowerCase();
    return lowerCaseStr.split('').filter(char => !vogaisList.includes(char) && char >= 'a' && char <= 'z').join('');
}

console.log(imprimirConsoantes("Hello World"));   // Saída: "hllwrld"

//Último Número de um Array: Escreva um programa que imprima o último número de um array, apenas se o array tiver pelo menos dois elementos.

function imprimirUltimoNumero(array) {
    if (array.length >= 2) {
        return array[array.length - 1];
    } else {
        return "O array não tem pelo menos dois elementos.";
    }
}

console.log(imprimirUltimoNumero([1, 2, 3, 4]));   // Saída: 5
console.log(imprimirUltimoNumero([9]));             // Saída: "O array não tem pelo menos dois elementos."
//Desafio: Primeiro Número de um Array Positivo: Escreva um programa que imprima o primeiro número de um array, apenas se o array tiver pelo menos um elemento e o primeiro número for maior que 0.


function primeiroNumeroPositivo(array) {
    if (array.length > 0 && array[0] > 0) {
        return array[0];
    } else {
        return "O array está vazio ou o primeiro número não é positivo.";
    }
}

console.log(primeiroNumeroPositivo([5, -3, 7]));   // Saída: 5
console.log(primeiroNumeroPositivo([]));          // Saída: "O array está vazio ou o primeiro número não é positivo."