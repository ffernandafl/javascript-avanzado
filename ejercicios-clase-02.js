/* Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo. */

const num1 = parseInt(prompt('Ingrese una cifra'));
const num2 = parseInt(prompt('Ingrese una segunda cifra'));

function suma (num1,num2) {
    var resultado = num1 + num2 ;
    document.write(resultado +'</br>' )
}

function resta (num1,num2) {
    var resultado2 = num1 - num2;
    document.write(resultado2 + '</br>')
}

function multiplicación (num1,num2) {
    var resultado3 = num1 * num2;
    document.write(resultado3 + '</br>')
}

function división (num1,num2) {
    var resultado4 = num1 / num2;
    document.write(resultado4 + '</br>')
}

if (num1>num2) {
    suma(num1,num2)
    resta(num1,num2)
    document.write(resultado1 + resultado2);
} else {
    multiplicación(num1,num2)
    división(num1,num2)
    document,write(resultado3 + resultado4);
}



