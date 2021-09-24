/* Funciones de flecha. Es otra manera de escribir una función. la dif principal es que una función normal se puede llamar la función aún antes de declararla, en cambio con las de flecha se debe declarar primero y después llamarla   */


//asi es como lo hemos hecho

console.log(suma(37,32));

function suma (num1, num2) {
    return num1 + num2;
}



const suma1 = (num1, num2) => {
    return num1 + num2;
}

console.log(suma1(32,38));
document.write(`<p>${suma1(5,3)}</p>`)