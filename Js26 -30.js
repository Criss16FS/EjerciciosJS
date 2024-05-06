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
