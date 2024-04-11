
/*
for(let i = 0; i<10; i++){
    console.log(i)
}

const numeros = [14,67,89,15,23]
for(let i = 0; i<numeros.length; i++){
    const elemento=numeros[i]
    console.log(elemento)
}

const numeros = [14, 67, 89, 15, 23]
for(let numero of numeros) {
    console.log(numero)
}*/

const frase = ["Oi", "sumida", "tudo", "bem?", "Saudades"]
function imprimirMensagens(frase){
    let mensangens= " "
    for(let arrayDePalavras of frase) {
        mensangens += arrayDePalavras + " "
    }
console.log(mensangens)
}
imprimirMensagens(frase)
