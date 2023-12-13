// Calss cancion provicional aqui luego hay que importar
class Cancion {
    #id
    #titulo
    #artista
    #categoria
    #imagen
    #duracion
    #album

    constructor(titulo, artista, categoria, imagen, duracion, album) {
        this.#id = crypto.randomUUID();
        this.#titulo = titulo;
        this.#artista = artista;
        this.#categoria = categoria;
        this.#imagen = imagen;
        this.#duracion = duracion;
        this.#album = album;
    }

    get id() {
        return this.#id;
    }

    get titulo() {
        return this.#titulo;
    }

    set titulo(value) {
        this.#titulo = value;
    }

    get artista() {
        return this.#artista;
    }

    set artista(value) {
        this.#artista = value;
    }

    // Getter y Setter para categoria
    get categoria() {
        return this.#categoria;
    }

    set categoria(value) {
        this.#categoria = value;
    }

    // Getter y Setter para imagen
    get imagen() {
        return this.#imagen;
    }

    set imagen(value) {
        this.#imagen = value;
    }

    // Getter y Setter para duracion
    get duracion() {
        return this.#duracion;
    }

    set duracion(value) {
        this.#duracion = value;
    }

    // Getter y Setter para album
    get album() {
        return this.#album;
    }

    set album(value) {
        this.#album = value;
    }
    toJSON(){
        return {
            id: this.id,
            titulo: this.titulo,
            artista: this.artista,
            categoria: this.categoria,
            imagen: this.imagen,
            duracion: this.duracion,
            album: this.album
        }
    }
}

const canciones= JSON.parse(localStorage.getItem('cancionesKey')) || []
const listaCanciones= document.querySelector('#listaCanciones')

const cancionReadyFor = new Cancion('... Ready for this ?','Taylor Swift','Electropop','https://th.bing.com/th?id=OSK.b902b1bd4ca8466ffc819dcb45a5c1a8&w=148&h=148&c=7&o=6&pid=SANGAM','3:28','Reputation')
const cancionBlankSpace = new Cancion('Blank Space','Taylor Swift','Electropop','https://www.bing.com/th?id=OIP.gdVUK53oTHaBsK3dXbipfwHaHa&w=174&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2','3:51',"1989 Taylor's Version")

canciones.push(cancionReadyFor)
canciones.push(cancionBlankSpace)

// ----------------------------------- F U N C I O N E S

console.log("🚀 ~ file: App.js:96 ~ listaCanciones:", listaCanciones)

const cargaInicial = ()=>{
    if(canciones.length > 0)
    {
        canciones.forEach((cancion,position) => {
            crearLi(cancion,++position)
        });
    }
}

const crearLi=(cancion, fila)=>{
    // const tablaContacto = document.getElementById('tablaContacto')
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

