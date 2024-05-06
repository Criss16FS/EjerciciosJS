console.log('Ejercicios 31 - 35');
// Escribe una función que devuelva la suma de los dígitos al cuadrado de un número dado.
function sumaDigitos2(numero) {
    let numeroString = numero.toString();
    let suma = 0;

    for (let i = 0; i < numeroString.length; i++) {
        let digito = parseInt(numeroString[i]);
        suma += digito * digito;
    }
    return suma;
}
// Ejemplo de uso:
console.log(sumaDigitos2(22)); // Esto devolverá 10 (6 + 4)
console.log("La suma es de 22 el igual a 8 (linea superior)");

// Escribe una función que determine si una cadena dada es un pangrama (contiene todas las letras del alfabeto al menos una vez).
function esPangrama(cadena) {
    cadena = cadena.toLowerCase();
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    for (let letra of alfabeto) {
        if (cadena.indexOf(letra) === -1) {
            return false;
        }
    }
    return true;
}

// Ejemplo de uso:
console.log(esPangrama("El veloz murciélago hindú comía feliz cardillo y kiwi.")); // Devuelve true


// Escribe una función que devuelva el número de veces que aparece una palabra específica en una cadena dada.
function contarPalabra(cadena, palabra) {
    let palabras = cadena.toLowerCase().split(' ');
    let contador = 0;
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === palabra.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

// Ejemplo de uso:
console.log(contarPalabra("La casa de papel es una serie de televisión muy popular.", "la")); // Devuelve 1


// Escribe una función que convierta un número decimal en su equivalente binario.
// Escribe una función que devuelva la longitud de la cadena más larga en un arreglo de cadenas dado.