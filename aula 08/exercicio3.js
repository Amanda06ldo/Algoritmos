const readline = require('readline')
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Digite um numero:',(numero) => {
    if (numero > 0) {
        console.log("Seu numero é positivo")
    }
    else if ( numero < 0) {console.log("Seu numero é negativo")
    }
    
    else { 
        console.log("Seu numero é igual a zero")
    }
    rl.close();
});