import promptSync from "prompt-sync";

const prompt = promptSync();

function contar(): void {

    const inicio = Number(prompt("Digite o valor inicial: "));
    const fim = Number(prompt("Digite o valor final: "));

    // Validação
    if (inicio >= fim) {
        console.log("O valor inicial deve ser menor que o valor final.");
        return;
    }

    // Mostrar os números
    for (let i = inicio; i <= fim; i++) {
        console.log(i);
    }
}

contar();