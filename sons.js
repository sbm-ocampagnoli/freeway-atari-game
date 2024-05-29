let somDeColisao = new Audio("./sons/colidiu.mp3");
let somDePontuacao = new Audio("./sons/pontos.wav");
let somDeTrilha = new Audio("./sons/trilha.mp3");

function tocarSomDeTrilha() {
    somDeTrilha.volume = 0.20;
    somDeTrilha.play();
    somDeTrilha.loop;
}

function tocarSomDePontuacao() {
    somDePontuacao.volume = 0.15;
    somDePontuacao.play();
}

function tocarSomDeColisao() {
    somDeColisao.volume = 0.75;
    somDeColisao.play();
}