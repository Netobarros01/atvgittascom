function celsiusParaFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32
}

function fahrenheitParaCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9
}

console.log(celsiusParaFahrenheit(30))
console.log(fahrenheitParaCelsius(86))






function ehPrimo(numero: number): boolean {

    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        }

    }

    return true;
}

console.log(ehPrimo(7)); // true
console.log(ehPrimo(10)); // false



Function contar (inicio: Number, fim: Number): void {

    if (inicio >= fim) {
        console.log ( "o valor inicial deve ser menor que o valor final");
        return
    }

    for ( let i = inicio; <= Fim; i++){
        console.log(i);
    }
}
