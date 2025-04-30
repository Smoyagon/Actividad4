/*Diseñar un programa que muestre el producto de los 10 primeros
números impares.*/

let producto=1
let contador=0
let impar = []

for (let i = 1; contador < 10; i++) {
    if(i%2!=0){
        contador++
        producto*=i
        impar.push(i)
    }
}
console.log(`Los primeros 10 números impares son ${impar} y el producto de estos es ${producto}`)