let xPosicaoInicial = 600;

let xCarro01 = xPosicaoInicial;
let yCarro01 = 40;
let velocidadeCarro01 = 2;

let xCarro02 = xPosicaoInicial;
let yCarro02 = 96;
let velocidadeCarro02 = 2.5;

let xCarro03 = xPosicaoInicial;
let yCarro03 = 150;
let velocidadeCarro03 = 3.2;


function mostraCarro() {
    image(imagemCarro01, xCarro01, yCarro01, 50, 40);
    image(imagemCarro02, xCarro02, yCarro02, 50, 40);
    image(imagemCarro03, xCarro03, yCarro03, 50, 40);
}

function movimentaCarro() {
    xCarro01 -= velocidadeCarro01;
    xCarro02 -= velocidadeCarro02;
    xCarro03 -= velocidadeCarro03;
}

function voltaPosicaoInicialDoCarro() {
    if (xCarro01 < -50) {
        xCarro01 = xPosicaoInicial;
    }
    if (xCarro02 < -50) {
        xCarro02 = xPosicaoInicial;
    }
    if (xCarro03 < -50) {
        xCarro03 = xPosicaoInicial;
    }
}