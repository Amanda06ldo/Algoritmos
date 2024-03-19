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
let valor = '15reias'
if(filme !== 'fantasia'){
    console.log('você só curte o genero fantasia')
}
else if (valor !== '15reias'){
    console.log('você não tem dinheiro suficiente')
}
else{
    console.log('vamos para o cinema')
}