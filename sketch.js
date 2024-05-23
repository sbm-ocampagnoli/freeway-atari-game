let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

function preload() {
    imagemDaEstrada = loadImage("./imagens/estrada.png");
    imagemDoAtor = loadImage("./imagens/ator-1.png");
    imagemCarro = loadImage("./imagens/carro-1.png")
}

function setup() {
    createCanvas(500, 400);
}

function draw() {
    configurarEstrada();
    configurarCarro();
    configurarAtor();
}

function configurarAtor() {
    let x, y, largura, altura;
    x = 100; y = 366; largura = 30; altura = 30;
    return image(imagemDoAtor, x, y, largura, altura);
}

function configurarCarro() {
    let x, y, largura, altura;
    x = 420; y = 40; largura = 50; altura = 40;
    return image(imagemCarro, x, y, largura, altura);
}

function configurarEstrada() {
    return background(imagemDaEstrada);
}