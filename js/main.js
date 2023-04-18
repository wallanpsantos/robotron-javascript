const controles = document.querySelectorAll('[data-controle]');

controles.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipularControle(evento.target.dataset.controles);
    })
})

function manipularControle(operacao) {
    const peca = document.querySelector('[data-contador]');
    (operacao === "+") ? peca.value = parseInt(peca.value) + 1 : peca.value = parseInt(peca.value) - 1;
}
