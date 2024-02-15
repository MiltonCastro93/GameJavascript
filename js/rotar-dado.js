const caja = document.querySelector('#caja');
const boton = document.querySelector('#boton');


function aleatorio(){
    let numeroRandom = Math.random();

    let numeroPor5 = numeroRandom * 5;

    let numero = Math.round(numeroPor5) + 1;
    console.log('Numero: ' , numero);
    return numero;

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
