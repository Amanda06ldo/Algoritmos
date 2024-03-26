const a = 1 //escopo global
function imprimaVariavel (){
    const b = 2 //escopo local
    console.log('variavel a',a)//é possivel acessar todas
    console.log('variavel b',b)
}
imprimaVariavel()

console.log('variavel a',a)//não é possivel acessar o b
console.log('variavel b',b)