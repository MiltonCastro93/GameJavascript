//Ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja');
const boton = document.querySelector('#boton');
/*
    Generar un numero aleatorio entre el 1 y el 6 (SIN DECIMALES)
--------------------------
    insertar en el contenedor #caja, la imagen con la cara del dado
    ( que coincida con el numero aleatorio obtenido)
--------------------------
    reproducir el audio
*/

function aleatorio(){
    let numeroRandom = Math.random();
    //un numero aleatorio entre 0-1 (con decimales;)

    let numeroPor5 = numeroRandom * 5;
    /*
        el multiplicar por 5
        obtenemos la posibilidad de un numero entre 0-5(con decimales)
    */
    let numero = Math.round(numeroPor5) + 1;
    console.log('Numero: ' , numero);
    return numero;

    /* Math.round( Math.random() *5 +1 ) */
}

function mostrarImagen( numero ){
    caja.innerHTML = '<img src="red/dice-' + numero + '.png">';
}

function playAudio(){
    let sonido = new Audio('audio/dice.mp3');
    sonido.play();
}

boton.addEventListener(
    'click', 
    function()
    {
        let numero = aleatorio();
        mostrarImagen(numero);
        playAudio();
    }
);