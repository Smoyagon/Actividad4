/*Pedir 10 números. Mostrar la media de los números positivos, la media de los números negativos y la cantidad de ceros.*/

let numeros = []
let positivos = 0
let sumaPositivos = 0
let negativos = 0
let sumaNegativos = 0
let ceros = 0

for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`))
    numeros.push(numero)

    if (numero > 0) {
        sumaPositivos += numero
        positivos++
    } else if (numero < 0) {
        sumaNegativos += numero
        negativos++
    } else {
        ceros++
    }
}

let mediaPositivos = positivos > 0 ? (sumaPositivos / positivos) : 0
let mediaNegativos = negativos > 0 ? (sumaNegativos / negativos) : 0

console.log(`Los números ingresados fueron: ${numeros} Media de positivos: ${mediaPositivos.toFixed(2)}\n` + `Media de negativos: ${mediaNegativos.toFixed(2)}\n` +`Cantidad de ceros: ${ceros}`);
