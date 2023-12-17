const reproducir = document.getElementById('reproducir');
const pausar = document.getElementById('pausar');
const audio = document.getElementById('audio');
const reiniciar = document.getElementById('reiniciar');
const contenedorDuracion = document.getElementById('duracion');
const sliderProgresoCancion = document.getElementById('sliderProgreso');
const contenedorTiempoActual = document.getElementById('tiempoActual');
const sliderVolumen = document.getElementById('sliderVolumen');
const contenedorOutput = document.getElementById('outputVolumen');
const mutear = document.getElementById('mutear');
let raf = null;

function calcularTiempo(secs) {
    const minutos = Math.floor(secs / 60);
    const segundos = Math.floor(secs % 60);
    const segundosDevueltos = segundos < 10 ? `0${segundos}` : `${segundos}`;
    return `${minutos}:${segundosDevueltos}`;
}
function mostrarDuracion() {
    contenedorDuracion.textContent = calcularTiempo(audio.duration);
}
function setSliderMax() {
    sliderProgresoCancion.max = Math.floor(audio.duration);
}