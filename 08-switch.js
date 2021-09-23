/* Switch
Estructura de control de flujo (Tipo if) */

/* const edad = parseInt(prompt("Ingresa tu edad"));
let mensaje = ""; */


/* Break indica el cierre de las operaciones, en case no se puede poner rangos, debe ser exacto */
/*switch (edad) {
    case 18:
        mensaje = "Acabas de cumplir la mayoría de edad";
        break;
    case 25:
        mensaje = "Ya eres un adulto";
        break;
    case 70:
        mensaje = "Ya eres de la tercera edad";
        break;
    default:
        mensaje = "Fuera del rango de edad";
        break;
}

document.write(`<p>${mensaje}</p>`);*/

const nombre=prompt('Ingresa tu nombre');
let mensaje = '';

switch (nombre) {
    case 'Fernanda':
        mensaje = 'Eres administradora';
        break;
    case 'Juan':
        mensaje = 'Eres usuario';
        break;
    default:
        mensaje = 'No tienes permisos para usar el sistema';
        break;
}

document.write(`<p>${mensaje}</p>`)