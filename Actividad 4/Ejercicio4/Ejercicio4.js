/*Pedir un número y calcular su factorial.*/

num =parseInt(prompt("Ingresa el número al que le deseas calcular el factorial"))
resultado=1

for (let i=1;i<=num;i++){
    resultado*=i
}
console.log(`El factorial del número ${num} es ${resultado}`)