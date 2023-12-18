export const canciones= JSON.parse(localStorage.getItem('cancionesKey')) || []
const listaCanciones= document.querySelector('#listaCanciones')

// ----------------------------------- F U N C I O N E S

const cargaInicial = ()=>{
    if(canciones.length > 0)
    {
        canciones.forEach((cancion) => {
            crearLi(cancion)
        });
    }
}

window.verDetalle=(idCancion)=>{
    const url = window.location
    url.href = `${url.origin}/pages/detalleMaquetado.html?id=${idCancion}`
}

const crearLi=(cancion)=>{
    listaCanciones.innerHTML += `
        <li class="list-group-item d-flex align-items-center justify-content-around m-2 row fila-grilla">
            <div class=" col-4 col-sm-3 col-lg-2 img-grilla">
                <img class="img-alum foto-grilla" src="${cancion.imagen}" alt="Album ${cancion.album}">
            </div>
            <div class=" col-4 col-sm-3 col-lg-2">
                <h6 class="tema">${cancion.titulo}</h6>
            </div>
            <div class=" col-2 col-sm-3 col-lg-2 artista-grilla">
                <p>${cancion.artista}</p>
            </div>
            <div class="  col-2 col-lg-2 album-grilla">
                <p>${cancion.album}</p>
            </div>
            <div class=" col-4 col-sm-3  col-lg-2 justify-content-around">
                <button class="btn-play" type="button"><i class="bi bi-play-circle h3 grilla-play"></i></button>
                <button type="button" class="btn-option" onclick="verDetalle('${cancion.id}')"><i class="bi bi-three-dots-vertical h3 grilla-play"></i></button>
            </div>
        </li>
        `
}

export const actualizarLista = (resultados) => {
    const listaCanciones = document.querySelector('#listaCanciones');
    listaCanciones.innerHTML = '';
    resultados.forEach((cancion) => {
        crearLi(cancion);
    });
};

cargaInicial()

