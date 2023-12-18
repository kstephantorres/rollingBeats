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
function mientrasSeReproduce() {
    sliderProgresoCancion.value = Math.floor(audio.currentTime);
    contenedorTiempoActual.textContent = calcularTiempo(sliderProgresoCancion.value);
    raf = requestAnimationFrame(mientrasSeReproduce);
}
if (audio.readyState > 0) {
    mostrarDuracion();
    setSliderMax();
} else {
    audio.addEventListener('loadedmetadata', () => {
        mostrarDuracion();
        setSliderMax();
        sliderProgresoCancion.value = Math.floor(audio.currentTime);
        contenedorTiempoActual.textContent = calcularTiempo(sliderProgresoCancion.value);
    });
}
function actualizarIconoMute() {
    const iconoMute = '<i class="bi bi-volume-mute"></i>';
    const iconoVolumen = '<i class="bi bi-volume-up"></i>';
    mutear.innerHTML = audio.muted ? iconoMute : iconoVolumen;
}

function mutearVolumen() {
    if (audio.muted) {
        audio.muted = false;
        audio.volume = 1
        sliderVolumen.value = 100
        contenedorOutput.textContent = sliderVolumen.value
    } else {
        audio.muted = true;
        sliderVolumen.value = 0;
    }
    actualizarIconoMute();
    contenedorOutput.textContent = sliderVolumen.value;
}
reproducir.addEventListener('click', () => { audio.play(); mientrasSeReproduce(); })
pausar.addEventListener('click', () => audio.pause())
reiniciar.addEventListener('click', () => audio.load())
sliderProgresoCancion.addEventListener('input', () => {
    contenedorTiempoActual.textContent = calcularTiempo(sliderProgresoCancion.value);
    if (!audio.paused) {
        cancelAnimationFrame(raf);
    }
});
sliderProgresoCancion.addEventListener('change', () => {
    audio.currentTime = sliderProgresoCancion.value;
    if (!audio.paused) {
        requestAnimationFrame(mientrasSeReproduce);
    }
});
sliderVolumen.addEventListener('input', (e) => {
    const value = e.target.value;
    contenedorOutput.textContent = value;
    audio.volume = value / 100;
});
mutear.addEventListener('click', mutearVolumen)
actualizarIconoMute();