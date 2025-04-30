/*Diseñar un programa que muestre el producto de los 10 primeros
números impares.*/

let n=0
let producto=1
let contador=0

for (let i = 1; contador < 10; i++) {
    if(i%2!=0){
        contador++
        producto*=i
    }
}
console.log(producto)