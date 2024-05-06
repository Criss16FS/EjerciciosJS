console.log('Ejercicios 21 - 25');
// Escribe una función que determine si una palabra dada es un palíndromo.
function esPalindromo(palabra) {
    // Convertimos la palabra a minúsculas y eliminamos los espacios en blanco
    palabra = palabra.toLowerCase().replace(/\s/g, '');
    // Invertimos la palabra
    const palabraInvertida = palabra.split('').reverse().join('');
    // Comparamos la palabra original con la palabra invertida
    return palabra === palabraInvertida;
}

// Ejemplo de uso:
const palabra1 = "reconocer";
console.log(`¿"${palabra1}" es un palíndromo? ${esPalindromo(palabra1)}`);

const palabra2 = "Hola";
console.log(`¿"${palabra2}" es un palíndromo? ${esPalindromo(palabra2)}`);


//Escribe una función que cuente el número de vocales en una cadena dada.

function contarVocales(cadena) {
    // Convertir la cadena a minúsculas para simplificar la comparación
    cadena = cadena.toLowerCase();
    
    // Definir un contador para almacenar el número de vocales
    let contadorVocales = 0;
    
    // Iterar sobre cada carácter de la cadena
    for (let i = 0; i < cadena.length; i++) {
        // Verificar si el carácter actual es una vocal
        if (cadena[i] === 'a' || cadena[i] === 'e' || cadena[i] === 'i' || cadena[i] === 'o' || cadena[i] === 'u') {
            contadorVocales++; // Incrementar el contador si es una vocal
        }
    }
    
    // Retornar el número total de vocales encontradas
    return contadorVocales;
}

// Ejemplo de uso:
const cadenaEjemplo = "Hola, ¿cómo estás?";
console.log("El número de vocales en la cadena es:", contarVocales(cadenaEjemplo));


//Escribe una función que invierta una cadena dada.

function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

// Ejemplo de uso:
console.log(invertirCadena("hola")); // Salida: "aloh"


//Escribe una función que devuelva el número de palabras en una cadena dada.
function contarPalabras(cadena) {
    return cadena.split(' ').length;
}

// Ejemplo de uso:
console.log(contarPalabras("Hola mundo")); // Salida: 2


// Escribe una función que determine si una cadena dada contiene solo caracteres alfabéticos (sin números ni caracteres especiales).
function soloAlfabeticos(cadena) {
    return /^[a-zA-Z]+$/.test(cadena);
}

// Ejemplo de uso:
console.log(soloAlfabeticos("Hola")); // Salida: true
console.log(soloAlfabeticos("Hola123")); // Salida: false