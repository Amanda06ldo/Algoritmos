const numero = [14, 67, 89, 19]
let maiorNumero = 0
function calculaMaior(array){
    for(let i = 0; i< array.lenght;){
    if (array[i] >maiorNumero){
        maiorNumero=array[i]
    }
}
return maiorNumero
}
calculaMaior(numero)
console.log(maiorNumero)