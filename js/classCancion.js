export class Cancion {
    #id
    #titulo
    #artista
    #categoria
    #imagen
    #duracion
    #album
    #cancion

    constructor(titulo, artista, categoria, imagen, duracion, album, cancion) {
        this.#id = crypto.randomUUID();
        this.#titulo = titulo;
        this.#artista = artista;
        this.#categoria = categoria;
        this.#imagen = imagen;
        this.#duracion = duracion;
        this.#album = album;
        this.#cancion = cancion
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

   
    get categoria() {
        return this.#categoria;
    }

    set categoria(value) {
        this.#categoria = value;
    }

    get imagen() {
        return this.#imagen;
    }

    set imagen(value) {
        this.#imagen = value;
    }

  
    get duracion() {
        return this.#duracion;
    }

    set duracion(value) {
        this.#duracion = value;
    }

    get album() {
        return this.#album;
    }

    set album(value) {
        this.#album = value;
    }

    get cancion() {
        return this.#cancion;
    }

    set cancion(value) {
        this.#cancion = value;
    }
    toJSON(){
        return {
            id: this.id,
            titulo: this.titulo,
            artista: this.artista,
            categoria: this.categoria,
            imagen: this.imagen,
            duracion: this.duracion,
            album: this.album,
            cancion: this.cancion
        }
    }
}