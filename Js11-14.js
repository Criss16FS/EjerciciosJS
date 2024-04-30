// Escribe una función que devuelva el máximo de dos números.
function maximo(a, b, c) {
    if (a > b) {
       c = a;
    } else {
        c = b;
    }
    //usamos c como variable auxiliar (resultado)
    console.log(`El numero mayor es ${c}`);
}

maximo(10, 80); // Valores de a y b

// Escribe una función que devuelva el mínimo de dos números.

function minimo (a,b){
    if (a < b){
        console.log(`el numero menor es ${a}`);
    } else {
        console.log(`el numero menor es ${b}`);
    }

    //Aqui lo hacemos directamente en el condicional
}
minimo(10, 20);


// Escribe una función que determine si un número dado es par o impar.

function parOimpar (a) {
if (a%2 == 0){
    console.log(`El numero ${a} es par`);
} else {
    console.log(`el numero ${a} es impar`);
}
}
parOimpar (5);


// Escribe una función que determine si un número dado es positivo, negativo o cero.

function posOneg (a) {

    if (a > 0){
        console.log(`El numero ${a} es positivo`);
    } else if (a < 0) {
        console.log(`El numero ${a} es negativo`);
    } else {
        console.log(`el numero ${a} es igual a 0`);
    }
}
posOneg(0);