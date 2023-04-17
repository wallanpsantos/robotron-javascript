const braco = document.getElementById('braco');
const controles = document.querySelectorAll('.controle-ajuste');

controles.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipularControle(evento.target.textContent);
    })
})

function manipularControle(evento) {
    (evento === "+") ? braco.value = parseInt(braco.value) + 1 : braco.value = parseInt(braco.value) - 1;
}
