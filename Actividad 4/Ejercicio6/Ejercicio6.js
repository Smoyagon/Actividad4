/*Pide un número (que debe estar entre 0 y 10) y muestra la tabla de multiplicar de dicho número.*/

let numero = parseInt(prompt("Ingrese un número entre 0 y 10:"));

if (numero >= 0 && numero <= 10) {
    let tabla = `Tabla de multiplicar del ${numero}:\n`;
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }
    console.log(tabla);
} else {
    console.log("Número inválido. Debe estar entre 0 y 10.");
}