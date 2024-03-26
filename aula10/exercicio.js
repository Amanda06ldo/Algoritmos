function soma(a,b){
    return a + b
} let resultado = soma(8,5)
console.log('O resultado é', resultado)

function somaNota(nota1,nota2,nota3){
    return (nota1 + nota2 + nota3) / 3
}     let resultadoNota = somaNota(10,7,9)
console.log('A nota media é',resultadoNota)

/*const  somaNota = function(nota1,nota2,nota3){
    const soma = (nota1 + nota2 + nota3) / 3
    return soma
}
const areaCalculada = calculaArea(10,7,9)*/

/*const  calculaArea = (nota1,nota2,nota3) => {
    const soma = (nota1 + nota2 + nota3) / 3
    return soma
}
const areaCalculada = calculaArea(10,7,9)*/

let parImpar = function par(a1){
  
    
    let resultado = a1 % 2
    
if (resultado ===0){
    console.log('seu numero é par')
}else{
    console.log(' seu numero é impar')
} }
let inparPar = parImpar(8)