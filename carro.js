let xPosicaoInicial = 600;

let xCarros = [xPosicaoInicial, xPosicaoInicial, xPosicaoInicial];
let yCarros = [40, 96, 150];
let velocidadeCarros = [2, 2.5, 3.2];

let xCarro01 = xPosicaoInicial;

let xCarro02 = xPosicaoInicial;

let xCarro03 = xPosicaoInicial;


function mostraCarro() {
    image(imagemCarro01, xCarros[0], yCarros[0], 50, 40);
    image(imagemCarro02, xCarros[1], yCarros[1], 50, 40);
    image(imagemCarro03, xCarros[2], yCarros[2], 50, 40);
}

function movimentaCarro() {
    xCarros[0] -= velocidadeCarros[0];
    xCarros[1] -= velocidadeCarros[1];
    xCarros[2] -= velocidadeCarros[2];
}

function voltaPosicaoInicialDoCarro() {
    if (xCarros[0] < -50) {
        xCarros[0] = xPosicaoInicial;
    }
    if (xCarros[1] < -50) {
        xCarros[1] = xPosicaoInicial;
    }
    if (xCarros[2] < -50) {
        xCarros[2] = xPosicaoInicial;
    }
}