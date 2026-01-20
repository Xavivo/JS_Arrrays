// EJERCICIO 1: Manipulación básica de arrays
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cuadrados = numeros.map(n => n ** 2);
const pares = numeros.filter(n => n % 2 === 0);
const sumaTotal = numeros.reduce((accum, n) => accum + n, 0);

console.log("Cuadrados:", cuadrados);
console.log("Pares:", pares);
console.log("Suma:", sumaTotal);