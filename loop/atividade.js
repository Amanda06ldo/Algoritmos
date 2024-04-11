let arrayDeNumeros = [2,3,4,5,6,7,24,29,46,]
let nMaior = 0

function verificaMaior(array){
    for(let i = 0; i < array.length; i++){
    if (array[i] > nMaior){
        nMaior=array[i]
    }
}
return nMaior
}
console.log(verificaMaior(arrayDeNumeros))