const numeros = [1, 2, 3, 4, 5];
const numeroProcurado = 9;
function encontrar(numero) {
    return numero === numeroProcurado;

}
const numerosEncontrados = numeros.filter(encontrar);
console.log(numerosEncontrados);