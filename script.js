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

// EJERCICIO 3: Organización de datos
const arrEstudiantes = [
    { nombre: "Fran", edad: 20, nota: 3 },
    { nombre: "Álvaro", edad: 32, nota: 1 },
    { nombre: "Alberto", edad: 19, nota: 8 },
    { nombre: "Lolo", edad: 19, nota: 10 }
];

const aprobados = arrEstudiantes.filter(e => e.nota >= 5);
const porEdad = arrEstudiantes.sort((a, b) => a.edad - b.edad);
const soloNombres = arrEstudiantes.map(e => e.nombre);
const notaPromedio = arrEstudiantes.reduce((accum, e) => accum + e.nota, 0) / arrEstudiantes.length;

console.log("Aprobados:", aprobados);
console.log("Ordenadpos por edad ascendente:", porEdad);
console.log("Solo los nombres:", soloNombres);
console.log("Promedio de notas:", notaPromedio);

// EJERCICIO 4: Análisis de palabras
const palabras = ["pinguino", "sopa", "css", "cactus", "horno", "mapache"];
const masDeCinco = palabras.filter(p => p.length > 5);
const invertidas = palabras.map(p => p.split("").reverse().join(""));
const ordenLongitud = [...palabras].sort((a, b) => a.length - b.length);

console.log("Más de 5 letras:", masDeCinco);
console.log("Invertidas:", invertidas);
console.log("Ordenadas por longitud:", ordenLongitud);

// EJERCICIO 5: Operaciones con matrices
const arrA = [5, 12, 8, 20];
const arrB = [10, 2, 4, 1];
const sumaMatrices = arrA.map((num, i) => num + arrB[i]);
const porIndice = arrA.map((num, i) => num * i);
const primerIndiceMayorDiez = arrA.findIndex(n => n > 10);

console.log("Suma de los dos arrays:", sumaMatrices);
console.log("Multiplicación por índice:", porIndice);
console.log("Índice del primer mayor que 10:", primerIndiceMayorDiez);

// --- EJERCICIO 6: Juego de palabras ---
const arrFrase = ["La", "vida", "es", "bella", "y", "divertida"];
const fraseUnida = arrFrase.reduce((accum, palabra) => accum + " " + palabra);
const fraseInvertida = [...arrFrase].reverse();
const contieneBella = arrFrase.includes("bella");

console.log("Frase reconstruida:", fraseUnida);
console.log("En el orden inverso:", fraseInvertida);
console.log("¿Contiene  la palabra bella?:", contieneBella);