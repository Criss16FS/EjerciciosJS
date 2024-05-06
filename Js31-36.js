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
// Escribe una función que devuelva el número de veces que aparece una palabra específica en una cadena dada.
// Escribe una función que convierta un número decimal en su equivalente binario.
// Escribe una función que devuelva la longitud de la cadena más larga en un arreglo de cadenas dado.