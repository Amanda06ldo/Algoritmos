const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 
rl.question('Digite um numero:',numero1 => {
    rl.question('Digite um segundo numero:',numero2 => {
        rl.question('Escolha uma operação (+, -, *, /):',operação => {
            let resultado;
            if (operação === "+"){
            resultado === numero1 + numero2; 
            } else if(operação === "-"){
                resultado === numero1 - numero2;
            } else if(operação === "*"){
                resultado === numero1 * numero2;
            } else if(operação === "/") {
                resultado === numero1 / numero2
            } else {
                console.log("Operação invalida.");
                rl.close();
                return;
            }
            console.log(`O resultado de ${numero1} ${operação} ${numero2} é ${resultado}`);
            rl.close()
        }) 
    })
})