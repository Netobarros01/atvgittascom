import promptSync from "prompt-sync"

const prompt = promptSync()

type Cliente = {
    nome: string
    peso: number
    altura: number
}

const cliente: Cliente = {
    nome: prompt("qual seu nome: "),
    peso: Number(prompt("Digite o peso (kg): ")),
    altura: Number(prompt("Digite a altura (m): "))
}

function calcularIMC(peso: number, altura: number): number {
    return peso / (altura * altura)
}

function classificarIMC(imc: number): string {
    if (imc < 18.5) {
        return "Abaixo do peso"
    } else if (imc < 25) {
        return "Peso normal"
    } else if (imc < 30) {
        return "Sobrepeso"
    } else {
        return "Obesidade"
    }
}

const imc = calcularIMC(cliente.peso, cliente.altura)

console.log(`\nNome: ${cliente.nome}`)
console.log(`IMC: ${imc.toFixed(2)}`)
console.log(`Classificação: ${classificarIMC(imc)}`)