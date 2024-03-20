let idade = 18
let idadeMaior = 18
if(idade => idadeMaior){
    console.log("você pode dirigir")
}
else {
    console.log("Você não pode dirigir.")
}
let horario
if (horario === 'manha'){
    console.log('Bom dia!')
} else if (horario === 'tarde'){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite')
}
switch(horario) {
    case 'manha':
        console.log('Bom dia')
        break
        case 'tarde':
            console.log('boa tarde')
            break
            default: console.log('boa noite')
            break
}

let filme = 'fantasia'
let valor = 12
let lanche = 'pipoca'
if(filme === 'fantasia' && valor < 15){
    console.log('Bom filme!')
    console.log('aproveita sua',lanche)
}
else{
    console.log('Escolha outro filme')
}