const parametroURL = new URLSearchParams(window.location.search)

const idCancion = parametroURL.get('id')
console.log("🚀 ~ file: detalle.js:4 ~ idCancion:", idCancion)

const canciones = JSON.parse(localStorage.getItem('cancionesKey'))|| []
console.log("🚀 ~ file: detalle.js:6 ~ canciones:", canciones)

const img = document.querySelector('#imagenAlbum')
const posicionCancion = canciones.findIndex((cancion)=>{
    console.log("🚀 ~ file: detalle.js:12 ~ posicionCancion ~ idCancion:", idCancion)
    console.log("🚀 ~ file: detalle.js:12 ~ posicionCancion ~ cancion.id:", cancion.id)
    return cancion.id === idCancion
    
}) 

console.log("🚀 ~ file: detalle.js:8 ~ posicionCancion:", posicionCancion)

const textos = document.querySelectorAll('.detalleCancion')
console.log("🚀 ~ file: detalle.js:12 ~ canciones[posicionCancion]:", canciones[posicionCancion])

textos[0].innerText= canciones[posicionCancion].titulo
textos[1].innerText= canciones[posicionCancion].artista
textos[2].innerText= canciones[posicionCancion].categoria
textos[3].innerText= canciones[posicionCancion].duracion
textos[4].innerText= canciones[posicionCancion].album
img.src = canciones[posicionCancion].imagen