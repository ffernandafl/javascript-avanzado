/* alert('Template string'); */

const nombre = prompt ('¿Cuál es tu nombre?');
const edad = prompt('¿Cuál es tu edad?');

console.log('Hola ' + nombre + ' saludos. Tu edad es ' + edad + ' años.');

/* Es equivalente a lo de arriba. */
const saludo = `<h1>Hola, ${nombre}, saludos.</br> Tu edad es de ${edad} años.</h1>`;

document.write(saludo);