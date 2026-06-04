let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

function verificarIntento() {
    let numeroIngresado = parseInt(document.querySelector('.container__input').value);
    intentos++;

    if (numeroIngresado === numeroSecreto) {
        document.querySelector('h1').textContent = '¡Acertaste!';
        document.querySelector('.texto__parrafo').textContent = 
            `Lo lograste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`;
        document.querySelector('.container__boton').disabled = true;
        document.getElementById('reiniciar').disabled = false;
    } else if (numeroIngresado < numeroSecreto) {
        document.querySelector('h1').textContent = 'Número muy bajo';
        document.querySelector('.texto__parrafo').textContent = 'Intenta con un número más alto';
    } else {
        document.querySelector('h1').textContent = 'Número muy alto';
        document.querySelector('.texto__parrafo').textContent = 'Intenta con un número más bajo';
    }
}

function reiniciarJuego() {
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
    document.querySelector('h1').textContent = '';
    document.querySelector('.texto__parrafo').textContent = '';
    document.querySelector('.container__input').value = '';
    document.querySelector('.container__boton').disabled = false;
    document.getElementById('reiniciar').disabled = true;
}

document.querySelector('.container__boton').addEventListener('click', verificarIntento);
document.getElementById('reiniciar').addEventListener('click', reiniciarJuego);
