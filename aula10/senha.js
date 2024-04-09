
const readline = require('readline')
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function resposta(user,senha){
    rl.question('Digite o usuario:',(user2) =>{
    rl.question('Digite a senha:',(senha2) => {
    if (user === user2) {
        console.log("usuario certo")
    } 
    else {
        console.log("usuario errado") 
    }
    
    if(senha === senha2) {
        console.log("senha certa")
    }
    else { 
        console.log("Senha incorreta")
    }
    rl.close();
})
})
};
resposta("Amanda","2610")