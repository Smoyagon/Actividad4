/*Realizar un juego para adivinar un número. Para ello pedir un número N,
y luego ir pidiendo números indicando “mayor” o “menor” según sea
mayor o menor con respecto a N. El proceso termina cuando el usuario
acierta.*/

let num
let secret = Math.floor(Math.random() * 20) + 1

do {
    num=parseInt(prompt("Adivina el número entre 1 al 20"))

    if (num<secret){
        console.log("El número secreto es mayor a "+num)
    } else if (num>secret){
        console.log("El número secreto es menor a "+num)
    }
}while(num!==secret)

console.log(`Acertaste el numero secreto es ${secret}`)