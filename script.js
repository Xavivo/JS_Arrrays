// EJERCICIO 1: Manipulación básica de arrays
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cuadrados = numeros.map(n => n ** 2);
const pares = numeros.filter(n => n % 2 === 0);
const sumaTotal = numeros.reduce((accum, n) => accum + n, 0);

console.log("Cuadrados:", cuadrados);
console.log("Pares:", pares);
console.log("Suma:", sumaTotal);

// EJERCICIO 2: Transformaciones de strings
const ciudades = ["Skopje","Budapest", "Sevilla", "California", "Toronto"];
const ciudadesMayus = ciudades.map(c => c.toUpperCase());
const ciudadesOrdenadas = ciudades.sort();
const empiezaConM = ciudades.some(c => c.startsWith("M"));
const todasLargas = ciudades.every(c => c.length > 4);

console.log("Mayúsculas:", ciudadesMayus);
console.log("Por orden alfabético:", ciudadesOrdenadas);
console.log("Empieza con M:", empiezaConM);
console.log("Con 4 letras o más: ", todasLargas);