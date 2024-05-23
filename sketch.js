let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

var xCarro = 600;

function preload() {
    imagemDaEstrada = loadImage("./imagens/estrada.png");
    imagemDoAtor = loadImage("./imagens/ator-1.png");
    imagemCarro = loadImage("./imagens/carro-1.png");
}

function setup() {
    createCanvas(500, 400);
}

function draw() {
    configurarImagemDoEstrada();
    mostrarCarro();
    mostrarAtor();
    moverCarro();
}

function mostrarAtor() {
    let x, yAtor, largura, altura;
    x = 100; yAtor = 366; largura = 30; altura = 30;
    return image(imagemDoAtor, x, yAtor, largura, altura);
}

function mostrarCarro() {
    let y, largura, altura;
    y = 40; largura = 50; altura = 40;
    return image(imagemCarro, xCarro, y, largura, altura);
}

function configurarImagemDoEstrada() {
    background(imagemDaEstrada);
}

function moverCarro() {
    xCarro -= 4; y = 40; largura = 50; altura = 40;
    image(imagemCarro, xCarro, y, largura, altura);
    if (xCarro <= 0) {
        image(imagemCarro, 600, y, largura, altura);
    }
}