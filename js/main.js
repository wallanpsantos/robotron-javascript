const controles = document.querySelectorAll('[data-controle]');

controles.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipularControle(evento.target.textContent, evento.target.parentNode);
    })
})

function manipularControle(operacao, controle) {
    const peca = controle.querySelector(".controle-contador");
    (operacao === "+") ? peca.value = parseInt(peca.value) + 1 : peca.value = parseInt(peca.value) - 1;
}
