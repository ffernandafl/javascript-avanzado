/* Escribir una calculadora para calcular la edad, el usuario ingresa su año de nacimiento y el programa le da la edad
 */
/* const nombre = prompt('¿Cuál es tu nombre?');
const año = prompt('¿Cuál es tu año de nacimiento?');
const añoactual = 2021

const saludo = `<h3>Hola, ${nombre}, saludos.</br> Tu edad es de ${añoactual-año} años.</h3>`;

document.write(saludo); */

/* Pedir un número y decirle al usuario si es par o impar */

/* var number = parseInt(prompt('Ingresa un número'));

if (number%2==0) {
    document.write('Tu número es par');
} else {
    document.write('Tu número es impar');
} */

/* Mostrar todos los numeros impares que hay entre dos números introducidos por el usuario*/
/* var number1 = parseInt(prompt('Ingrese la primer cantidad'));
var number2 = parseInt(prompt('Ingrese la segunda cantidad'));

document.write("Los números impares que existen entre " + number1 + " y " + number2 + " son: ");
 
if (number1 < number2) {
    for (var i = number1; i < number2; i++) {
        if (i % 2 != 0) {
            document.write(`<strong>${i}, </strong>`);
        }
    }
}  */


//Más ejercicios
//escribir los número del 1 al 1.000 de dos en dos

/* for (i=1;i<=1000;i+=2) 
   	document.write(i + " ") */

//contar descendentemente del 343 al 10
/* for (i=343;i>=10;i--)
    document.write(i + " ") */

//resumir esto
{/* <h1>Encabezado de nivel 1</h1> 
<h2>Encabezado de nivel 2</h2> 
<h3>Encabezado de nivel 3</h3> 
<h4>Encabezado de nivel 4</h4> 
<h5>Encabezado de nivel 5</h5> 
<h6>Encabezado de nivel 6</h6> */}

/* for (i=1;i<=6;i++)
    document.write(`<h${i}>Encabezado de nivel ${i}</h${i}>`) */

    //o

for (i=1;i<=6;i++) {
    document.write("<H" + i + "> Encabezado de nivel " + i + "<H" + i + ">");
}
        


