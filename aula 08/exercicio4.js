const readline = require('readline')
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
const senha = "2610"
rl.question('Digite a senha:',(senha2) => {
    if (senha === senha2) {
        console.log("Login bem-sucedido")
    }
    else { 
        console.log("Senha incorreta")
    }
    rl.close();
});