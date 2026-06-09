let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 0;
let numeroMaximo = 30;

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 100) + 1;
    if (listaNumerosSorteados.length == 100) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function verificarIntento() {
    let numeroDelUsuario = parseInt(document.querySelector('.container__input').value);
    if (numeroDelUsuario === numeroSecreto) {
        asignarTextoElemento('h1', `Acertaste el número ${numeroSecreto}`);
        asignarTextoElemento('.texto__parrafo', `Lo descubriste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDelUsuario > numeroSecreto) {
            asignarTextoElemento('.texto__parrafo', 'El número secreto es menor');
        } else {
            asignarTextoElemento('.texto__parrafo', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarCaja() {
    document.querySelector('.container__input').value = '';
}

function reiniciarJuego() {
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    asignarTextoElemento('h1', '¿Juego de los Numeros Secretos?');
    asignarTextoElemento('.texto__parrafo', 'Indica un número del 1 al 100');
    document.getElementById('reiniciar').setAttribute('disabled', true);
    limpiarCaja();
}

asignarTextoElemento('h1', '¿Cuál es el número secreto?');
asignarTextoElemento('.texto__parrafo', 'Indica un número del 1 al 100');
