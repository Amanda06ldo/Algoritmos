const readline = require('readline')
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Qual a sua idade?',(idade) => {
    console.log('sua idade é:',idade); 
   if(idade >= 18) {
        console.log("Você é maior de idade")
    }
    else {
        console.log("Você é menor de idade")
    }
    rl.close();
});

const senha = 2610
rl.question('Qual é a senha?',(senha) => {
    console.log('sua idade é:',senha); 
   if() {
        console.log("Você é maior de idade")
    }
    else {
        console.log("Você é menor de idade")
    }
    rl.close();
});
