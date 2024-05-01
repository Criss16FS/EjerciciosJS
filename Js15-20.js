// Escribe una función que determine si un año dado es bisiesto.
function añoBiciesto(año) {
    if (año % 4 == 0) {
        console.log(`El año ${año} es Biciesto`);
    } else {
        console.log(`El año ${año} no es biciesto`);
    }
}
añoBiciesto(2024);


// Escribe una función que convierta grados Celsius a Fahrenheit.
function fahrenheit(a) {
    fahrenheit = (a * (9 / 5)) + 32;

    console.log(`${a} grados centigrados equivale a ${fahrenheit} grados Fahrenheit`)
}
fahrenheit(32);


// Escribe una función que convierta grados Fahrenheit a Celsius.
function celcius(a) {
    celcius = (a - 32) * (5 / 9);

    console.log(`${a} grados Farenheit equivale a ${celcius} grados Celcius`);
}
celcius(89.6);


// Escribe una función que devuelva el factorial de un número dado. - Colaboracion
function factorial(numero) {
    // Si el número es 0, el factorial es 1
    if (numero === 0) {
        console.log(`El factorial de numero ${numero} es 1`)
    } else {
        let resultado = 1;
        for (let i = 1; i <= numero; i++) {
            resultado *= i;
        }
        console.log(`El factorial de numero ${numero} es ${resultado}`);
    }

}
factorial(5); // Esto devolverá 120 (5! = 5 * 4 * 3 * 2 * 1)


// Escribe una función que devuelva la suma de los dígitos de un número dado. - Colaboracion
function sumaDigitos(numero) {
    // Convertimos el número a una cadena para poder iterar sobre sus dígitos
    let numeroComoString = numero.toString();
    let suma = 0;

    // Iteramos sobre cada dígito en la cadena y sumamos su valor convertido a número
    for (let i = 0; i < numeroComoString.length; i++) {
        suma += parseInt(numeroComoString[i]);
    }

    console.log(`la suma de los diogitos del numero ${numero} es igual a ${suma}`);
}

// Ejemplo de uso:
sumaDigitos(64); // Esto devolverá 10 (6 + 4)



// Escribe una función que determine si un número dado es primo. - colaboracion
function esPrimo(numero) {
    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
        console.log(`El numero ${numero} no es primo`);
    }

    // Iteramos desde 2 hasta la mitad del número, ya que ningún divisor será mayor que la mitad del número
    for (let i = 2; i <= numero / 2; i++) {
        // Si el número es divisible por algún número en este rango, no es primo
        if (numero % i === 0) {
            console.log(`El numero ${numero} no es primo`);
        }
    }

    // Si el bucle termina y no se encontró ningún divisor, el número es primo
    console.log(`El numero ${numero} es primo`);
}

// Ejemplo de uso:
esPrimo(7); // Esto devolverá true
esPrimo(10); // Esto devolverá false


