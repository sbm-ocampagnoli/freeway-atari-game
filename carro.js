let xPosicaoInicial = 600;

let xCarros = [xPosicaoInicial, xPosicaoInicial, xPosicaoInicial];
let yCarros = [40, 96, 150];
let velocidadeCarros = [2, 2.5, 3.2];

let xCarro01 = xPosicaoInicial;

let xCarro02 = xPosicaoInicial;

let xCarro03 = xPosicaoInicial;


function mostraCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
}

function movimentaCarro() {
    for (let i = 0; i < xCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialDoCarro() {

    for (let i = 0; i < xCarros.length; i++) {
        if (passouTodaTela(i)) {
            xCarros[i] = xPosicaoInicial;
        }
    }
}


function passouTodaTela(carro) {
    return xCarros[carro] < -50;
}