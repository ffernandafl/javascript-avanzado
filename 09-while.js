/* Ciclo while 
Nos permite repetir código mientras una condición sea verdadera*/

/*let num1 = parseInt(prompt('Ingresa un número'));*/

/* NaN= not a number, isNaN nos dice si el valor no es un número*/
/*while (isNaN(num1)) {
    num1 = parseInt(prompt('Ingresa un número'));
}*/

//Intenta hacer esto usando el ciclo for, para dar chance solo de 3 intentos
/*let num1 = parseInt(prompt("Ingresa un número"));
const num_secreto = 23;
let intentos = 1;

while(num1 !== num_secreto) {
    console.log("No adivinaste el número secreto, intenta de nuevo");
    console.log(`Intento: ${intentos}`);
    intentos++;
    num1 = parseInt(prompt("Ingresa un número"));
}*/
//console.log('Felicidades, encontraste el número secreto');


//Ciclo do while, la diferencia con el anterior es que primero ejecuta el código y luego pregunta

/*let num1 = parseInt(prompt("Ingresa un número"));

do {
    document.write(`<p>El número introducido es ${num1}</p>`);
    num1 = parseInt(prompt("Ingresa un número"));
}
while(num1 > 5); */

/* Solcitar número al usuario, mostrar la suma y la media de los números introducidos
hasta introducir un número negativo y ahi mostrar el resultado */

/* let num1 = parseInt(prompt("Ingresa un número"));
let suma=0;
let contador=0;

while (num1>0) {
    suma=suma+num1
    contador++
    num1=parseInt(prompt('Ingresa un número'));
} */

/* document.write(suma)
document.write(suma/contador) */
/* document.write(`La suma de los números fue ${suma} y la media es ${suma/contador}`) */


/* Mostrar todos los numero divisores de un número introducido.
 */

/* var introduce = parseInt(prompt('Introduce un número'));
var numeros;

for (numeros=2;numeros < introduce/2; numeros++) {
    if (introduce % numeros === 0) {
        console.log(numeros," lo divide ");
    }
}
 */
const numero = parseInt(prompt('Introduce un numero'));

for(let i = 0; i <= numero; i++){
    if(numero % i === 0){
        document.write(i + "</br>");
    }
}