// Escribe una función que devuelva el área de un cuadrado dado su lado.

function areaCuadrado(lado1, lado2) {
    areaCuadrado = lado1 * lado2;
    console.log(`El area de un cuadrado con medidas de ${lado1} y ${lado2} es igual a ${areaCuadrado} ^2`);
}
areaCuadrado(10, 15); // Valor del Lado 1 y Lado 2


// Escribe una función que devuelva el área de un círculo dado su radio.

function areaCirculo(radio, pi){
    let diametro = radio * 2;
    areaCirculo = radio**2 * pi;
    console.log(`El area de un circulo con un diametro de ${diametro} mt y un radio de ${radio} mt es igual a ${areaCirculo}  `);
}
areaCirculo(15 ,Math.PI);// Valor del radio y Valor de PI


// Escribe una función que devuelva el área de un triángulo dado su base y altura.

function areaTriangulo (base, altura){
areaTriangulo = (base * altura) / 2;
console.log(`El area de un triangulo que tiene una base de ${base} y una altura de ${altura} es igual a ${areaTriangulo}`);
}
areaTriangulo(12, 15); // Valor de la base y la altura


// Escribe una función que devuelva el área de un rectángulo dado su base y altura.

function areaRectangulo (base, altura){
    areaRectangulo = base * altura;
    console.log(`EL area de un rectangulo el cual tiene uina base de ${base} y una altura de ${altura} es igual a ${areaRectangulo} ^2`);

}
areaRectangulo(12, 18);// Valor de la base y la altura


// Escribe una función que devuelva el área de un trapecio dado sus bases y altura.

function areaTrapecio (base1, base2, altura){
    areaTrapecio = ((base1+ base2)/2) * altura;
    console.log(`El area de un trapecio con una base menor de ${base1}, una base mayor de ${base2} y una altura de ${altura} es igual a ${areaTrapecio} ^2`);
}
areaTrapecio(3.5 , 9.5, 4);// Valor de la base menor, base mayor y la altura


// Escribe una función que devuelva la longitud de la hipotenusa de un triángulo rectángulo dado sus catetos.