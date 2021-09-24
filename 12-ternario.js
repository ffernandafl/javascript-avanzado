/* Operador ternario. Es una estructura de flujo (if abreviada)*/
const edad = 18;

/* esto se puede reemplazar por un operador ternario
if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
} */

/*consta de 3 partes, a codición,  el ? es para saber si la condición es verdadera o falsa y lo que se va a ejecutar si es true o false */
const mensaje = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';

document.write(`<p>${mensaje}</p>`)