function imprimaNota(nota1,nota2,nota3){
    const media = (nota1 + nota2 + nota3) / 3
    console.log(media.toFixed(2))
}
imprimaNota(10,7,9)

function verificaNumero(numero){
    if (numero % 2 === 0){
        console.log(`O número ${numero} é par`)
    } else {
        console.log(`O número ${numero} é impar`)
    }

}
verificaNumero(80)