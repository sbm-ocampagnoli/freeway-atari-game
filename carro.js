let xPosicaoInicial = 600;

let xCarros = [xPosicaoInicial, xPosicaoInicial, xPosicaoInicial];
let yCarros = [40, 96, 150];
let velocidadeCarros = [2, 2.5, 3.2];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
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