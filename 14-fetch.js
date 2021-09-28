/* Fetch nos permite hacer peticiones http desde javascript.
Promesas es como decir que estoy esperando esa respuesta.
json= javascript object notation */

const peticion = fetch('https://jsonplaceholder.typicode.com/todos/1').then(resp => resp.json()).then (data => {
    console.log(data);
}) .catch(e => {
    console.log(e);
});


console.log(peticion);