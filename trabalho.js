let HouseOfTheDragonsPersonagens = []

const statusDragons = [

    {nome: "Caraxes", status: "vivo"},
    {nome: "Syrax", status: "vivo"},
    {nome: "meleys", status: "vivo"},
    {nome: "vermithor", status: "vivo"},
    {nome: "Sunfyre", status: "vivo"},
    {nome: "Tessarion", status: "vivo"},
    {nome: "Vhagar", status: "vivo"},
    {nome: "Dreamfyre", status: "vivo"},
    {nome: "Arrax", status: "morto"},
    {nome: "Seasmoke", status: "vivo"},
    {nome: "Tyraxes", status: "vivo"},
    {nome: "Vermax", status: "vivo"},
   
  
]



function novoPersonagem(){
    let nomePersonagem = readline.question("Digite o nome do personagem:")
    let casaPersonagem = readline.question("Digite a casa do novo personagem:")
    let statusPersonagem = readline.question("Digite o status do novo personagem:")
    HouseOfTheDragonsPersonagens.push({nome: nomePersonagem, casa: casaPersonagem, status: statusPersonagem});
}

function novoStatus(){
   const num = Number(readline.question("Digite o indice do personagem que você quer mudar o status:"))
    
    
    const novoStatus = readline.question("Novo status do personagem (vivo/morto/desconhecido): ")
    HouseOfTheDragonsPersonagens[num].status = novoStatus
    console.log('Agora seu status é', novoStatus)
} 

function verificaDragões(){
    let nomeCasa = readline.question("Digite o nome da casa:")
  
    if (nomeCasa == 'targaryen') {
    console.log("7 dragões")
    } else if (nomeCasa == 'velaryon') {
        console.log ("5 dragões")
    }else{console.log("0 dragões")}
    
    } 

   
   

    function statusDragoes () {
        for (let i = 0; i < statusDragons.length; i++) {
        
            console.log(`o dragão ${statusDragons[i].nome} esta ${statusDragons[i].status}`)
        }
    }

function exibirMenu() {

    console.log("Menu de opções:");
    console.log("1 Visualizar todos os personagens da série.:");
    console.log("2 Adicionar um novo personagem à série:");   
    console.log("3 Atualizar o status de um personagem:");
    console.log("4 Verificar a quantidade de dragões de uma casa específica:")
    console.log("5 Verificar os status dos dragãoes")
    console.log("6 sair");
}

const readline = require('readline-sync');

function processarEscolha(opção){
    switch(opção){
        case '1':
            console.log("Você escolheu a opção 1.")
            console.log(HouseOfTheDragonsPersonagens)
            break;
        case '2':
            console.log("Você escolheu a opção 2.")
                novoPersonagem()
             console.log(HouseOfTheDragonsPersonagens)
            break;
            case '3':
                console.log("Você escolheu a opção 3.")
                novoStatus()
                break;
            case '4':
                console.log("Você escolheu a opção 4")
                verificaDragões()
                break;
            case '5':
                console.log("Você escolheu a opçao 5")
                statusDragoes()
                
                break;

            case '6':
                    console.log("Você encerrou o programa....")
                    return true
                    default:
                        console.log("Opção inválida. Por favor,escolha uma opção valida")
                    
    }
    return false

}

function main(){
    let encerrar = false
    while(!encerrar){
        exibirMenu()
        let opção = readline.question("Digite o número da opção desejada:")
        encerrar = processarEscolha(opção)
 
    }
}
main()