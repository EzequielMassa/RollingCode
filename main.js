const botonHablar = document.getElementById('robot__btn__hablar');
const audio = new Audio('./assets/media/audio/r2d2_short_sms.mp3');
const botonSecreto = document.getElementById('robot__btn__secreto');
const audioSecreto = new Audio('./assets/media/audio/secreto.mp3');
const background = document.querySelector('.robot__container');
const colores = ['#0000ff', '#ffff00'];
let indiceColor = 0;

botonHablar.addEventListener('click', () => {
    audio.play();
    moverCabeza();
    setTimeout(resetearCabeza, 3000);
})

botonSecreto.addEventListener('click', () => {
    audioSecreto.play();
    moverCabeza();
    setInterval(cambiarColorFondo, 1000);
})



function moverCabeza() {
    const cabeza = document.querySelector('.head--animation');
    cabeza.classList.add('head--animation--js');
}

function resetearCabeza() {
    const cabeza = document.querySelector('.head--animation');
    cabeza.classList.remove('head--animation--js');
}

function cambiarColorFondo() {
    background.style.backgroundColor = colores[indiceColor];
    indiceColor = (indiceColor + 1) % colores.length;

}
