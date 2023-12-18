export default class Miembro{
    #id
    #nombre
    #imagen
    #descripcion

    constructor(nombre, imagen, descripcion){
        this.#id = crypto.randomUUID();
        this.#nombre = nombre;
        this.#imagen = imagen;
        this.#descripcion = descripcion;
    }

   
    get id() {
        return this.#id;
    }

    
    get nombre() {
        return this.#nombre;
    }

    set nombre(value) {
        this.#nombre = value;
    }

    get imagen() {
        return this.#imagen;
    }

    set imagen(value) {
        this.#imagen = value;
    }

    get descripcion() {
        return this.#descripcion;
    }

    set descripcion(value) {
        this.#descripcion = value;
    }
}