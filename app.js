let numeroSecreto = gerarNumeroAleatorio();
let tentativas;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10:');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor')
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior')
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}