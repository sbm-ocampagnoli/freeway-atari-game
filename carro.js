let xCarro01 = 600;
let yCarro01 = 40;
let velocidadeCarro01 = 2;

let xCarro2 = 600;
let yCarro2 = 96;
let velocidadeCarro02 = 2.5;

let xCarro3 = 600;
let yCarro3 = 150;
let velocidadeCarro03 = 3.2;

function mostraCarro() {
    image(imagemCarro01, xCarro01, yCarro01, 50, 40);
    image(imagemCarro02, xCarro2, yCarro2, 50, 40);
    image(imagemCarro03, xCarro3, yCarro3, 50, 40);
}

function movimentaCarro() {
    xCarro01 -= velocidadeCarro01;
    xCarro2 -= velocidadeCarro02;
    xCarro3 -= velocidadeCarro03;
}