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