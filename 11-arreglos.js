/* Arreglos. Estructura de datos */

/* Declaración de arreglos */
const arreglo = [];
const arreglo2 = new Array();

let lenguajes = ['Javascript', 'Java', 'PHP', 'Python','C#', 'C++', 'Scala', 'Rust', 'Ruby', 'Cobol'];

/* forEach nos permite recorrer los elementos del arreglo */


document.write('<ul>');
lenguajes.forEach(function(lenguaje, index){
    document.write(`<li>${index} - ${lenguaje}</li>`);
});
document.write('</ul');

/* Map, crea un nuevo arreglo con los resultados */

let numeros = Array(2, 3, 4, 27, 19, 12);
let numeros2 = numeros.map(function(numero){
    return numero * 2;
});

console.log(numeros);
console.log(numeros2);

/* Includes determina si unarreglo contiene un valor, te dice si es true que ese valor está o no está. */
console.log(lenguajes.includes('PHP'));
console.log(lenguajes.includes('go'));

/* Filter, crear un nuevo arreglo con todos los elementos que cumplan con la condicion */

let filtrados = numeros.filter(function(numero) {
    if (numero > 10) {
        return numero;
    }
});

console.log(filtrados);