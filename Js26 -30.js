console.log('Ejercicios 26 - 30');
/*Escribe una función que devuelva una cadena con los números del 1 al 100, pero para los múltiplos de 3 imprima "Fizz"
para los múltiplos de 5 imprima "Buzz", y para los múltiplos de ambos 3 y 5 imprima "FizzBuzz".*/
function fizzBuzz() {
    let result = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += "FizzBuzz ";
        } else if (i % 3 === 0) {
            result += "Fizz ";
        } else if (i % 5 === 0) {
            result += "Buzz ";
        } else {
            result += i + " ";
        }
    }
    return result.trim(); // Elimina el espacio en blanco al final
}

// Llamamos a la función y mostramos el resultado en la consola
console.log(fizzBuzz());


// Escribe una función que devuelva el número de veces que aparece una letra específica en una cadena dada.
function contarLetra(cadena, letra) {
    const regex = new RegExp(letra, 'gi');
    return (cadena.match(regex) || []).length;
}
// Ejemplo de uso:
console.log(contarLetra("Hola mundo", "o")); // Salida: 2


// Escribe una función que devuelva el número de días que faltan para Navidad a partir de una fecha dada.
function diasParaNavidad(fecha) {
    const navidad = new Date(fecha.getFullYear(), 11, 25);
    const unDia = 1000 * 60 * 60 * 24;
    const diferencia = Math.ceil((navidad - fecha) / unDia);
    return diferencia;
}
// Ejemplo de uso:
const hoy = new Date();
console.log(diasParaNavidad(hoy)); // Salida: número de días faltantes para Navidad


// Escribe una función que devuelva la suma de los números pares dentro de un rango dado.
function sumaPares(rangoInicial, rangoFinal) {
    let suma = 0;
    for (let i = rangoInicial; i <= rangoFinal; i++) {
        if (i % 2 === 0) {
            suma += i;
        }
    }
    return suma;
}
// Ejemplo de uso:
console.log(sumaPares(1, 10)); // Salida: 30 (2 + 4 + 6 + 8 + 10)

// Escribe una función que devuelva una matriz con los números primos dentro de un rango dado
function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    let divisor = 5;
    while (divisor * divisor <= numero) {
        if (numero % divisor === 0 || numero % (divisor + 2) === 0) return false;
        divisor += 6;
    }
    return true;
}

function numerosPrimos(rangoInicial, rangoFinal) {
    const primos = [];
    for (let i = rangoInicial; i <= rangoFinal; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

// Ejemplo de uso:
console.log(numerosPrimos(1, 20)); // Salida: [2, 3, 5, 7, 11, 13, 17, 19]
