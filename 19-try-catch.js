/* Try catch nos permite ejecutar código propenso a fallar de una manera segura */


const gravedad = 9.8;
console.log(gravedad);

//Intenta ejecutar el código, si hay error ejecuta el catch
try {
    gravedad = 10.1;

} catch (e) {
    //El catch se ejecuta si hay error, recibe como primer parámetro el error
    console.log (e);
} finally {
    //finally haya error o no siempre se ejecuta. Finally es opcional.
    console.log('Soy el finally')
}

console.log(gravedad);