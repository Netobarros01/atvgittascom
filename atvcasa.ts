const prompt = require("prompt-sync")();

let saldo = 0;
let opcao = 0;

while (opcao != 4) {

    console.log("\n===== CAIXA ELETRÔNICO =====");
    console.log("1 - Depositar");
    console.log("2 - Sacar");
    console.log("3 - Mostrar saldo");
    console.log("4 - Sair");

    opcao = Number(prompt("Escolha uma opção: "));

    // Depositar
    if (opcao == 1) {

        let deposito = Number(prompt("Digite o valor do depósito: "));

        if (deposito > 0) {
            saldo = saldo + deposito;
            console.log("Depósito realizado!");
        } else {
            console.log("Valor inválido!");
        }

    }

    // Sacar
    else if (opcao == 2) {

        let saque = Number(prompt("Digite o valor do saque: "));

        if (saque > saldo) {
            console.log("Saldo insuficiente!");
        } else if (saque <= 0) {
            console.log("Valor inválido!");
        } else {
            saldo = saldo - saque;
            console.log("Saque realizado!");
        }

    }

    // Mostrar saldo
    else if (opcao == 3) {

        console.log("Seu saldo é: R$ " + saldo);

    }

    // Sair
    else if (opcao == 4) {

        console.log("Programa encerrado!");

    }

    // Opção inválida
    else {

        console.log("Opção inválida!");

    }
}