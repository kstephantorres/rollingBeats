import { Cancion } from "./classCancion.js"

const canciones= JSON.parse(localStorage.getItem('cancionesKey')) || []
const listaCanciones= document.querySelector('#listaCanciones')


// Canciones agregadas manualmete porque aun no tenemos un CRUD de la clase administrador
const cancionReadyFor = new Cancion('... Ready for it?','Taylor Swift','Electropop','https://th.bing.com/th?id=OSK.b902b1bd4ca8466ffc819dcb45a5c1a8&w=148&h=148&c=7&o=6&pid=SANGAM','3:28','Reputation')
const cancionBlankSpace = new Cancion('Blank Space','Taylor Swift','Electropop','https://www.bing.com/th?id=OIP.gdVUK53oTHaBsK3dXbipfwHaHa&w=174&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2','3:51',"1989 Taylor's Version")

canciones.push(cancionReadyFor)
canciones.push(cancionBlankSpace)

// ----------------------------------- F U N C I O N E S

const cargaInicial = ()=>{
    if(canciones.length > 0)
    {
        canciones.forEach((cancion,position) => {
            crearLi(cancion,++position)
        });
    }
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
                <button type="button" class="btn-option"><i class="bi bi-three-dots-vertical h3 grilla-play"></i></button>
            </div>
        </li>
        `
}

cargaInicial()

