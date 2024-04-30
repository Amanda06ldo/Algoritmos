let listaDeDoadores = []

function novoDoador(){
    let nomeDoador = readline.question("Digite o seu nome:")
    let idadeDoador = readline.question("Digite a sua idade:")
    let pesoDoador = readline.question("Digite o seu peso:")
    let tipoSanguineoDoador = readline.question("Digite o seu tipo sanguíneo")
    let ultimaDoacaoDoador = readline.question("Digite a data da última doação que fez:")
    listaDeDoadores.push({nome: nomeDoador, idade: idadeDoador, peso: pesoDoador, tipoSanguineo: tipoSanguineoDoador, ultimaDoacao: ultimaDoacaoDoador});
}

function buscarPorTipoSanguineo() {
    rl.question("Informe o tipo sanguíneo desejado: ", (tipoSanguineoDesejado) => {
      console.log(`Doadores com tipo sanguíneo ${tipoSanguineoDesejado}:`);
      let encontrou = false;
      doadores.forEach((listaDeDoadores) => {
        if (listaDeDoadores.tipoSanguineoDoador.toUpperCase() === tipoSanguineoDesejado.toUpperCase()) {
          console.log(`Nome: ${listaDeDoadores.nome}`);
          encontrou = true;
        }
      });
      if (!encontrou) {
        console.log("Nenhum doador encontrado com o tipo sanguíneo informado.");
      }
      menu(); 
    });
  }




   
   

function exibirMenu() {

    console.log(" SISTEMA DE CADASTRO DE DOADORES DE SANGUE ");
    console.log("1. Cadastrar doador");
    console.log("2. Listar doadores");   
    console.log("3. Buscar doador por tipo sanguíneo");
    console.log("4. Buscar doador por data da última doação")
    console.log("5. Sair");
}

const readline = require('readline-sync');

function processarEscolha(opção){
    switch(opção){
        case '1':
            console.log("Você escolheu a opção 1.")
            novoDoador()
            console.log(listaDeDoadores)
            break;
        case '2':
            console.log("Você escolheu a opção 2.")
             console.log(listaDeDoadores)
            break;
            case '3':
                console.log("Você escolheu a opção 3.")
                buscarPorTipoSanguineo()
                break;
            case '4':
                console.log("Você escolheu a opção 4")
               
                break;
            case '5':
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
        let opção = readline.question("Escolha uma opção:")
        encerrar = processarEscolha(opção)
 
    }
}
main()