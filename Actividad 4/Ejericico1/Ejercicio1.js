//Leer un número y mostrar su cuadrado, repetir el proceso hasta que se introduzca un número negativo.

let resultado
let num

do {
    num = parseInt(prompt("Ingresa un número"))
    if (num >= 0) {
        resultado = num ** 2
        console.log(`El cuadrado del número ${num} es ${resultado}`)
    }
} while (num >= 0)

console.log(`Introdujiste el número negativo ${num}, ha terminado.`)