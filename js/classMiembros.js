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

    // Getter para id
    get id() {
        return this.#id;
    }

    // Getter y Setter para nombre
    get nombre() {
        return this.#nombre;
    }

    set nombre(value) {
        this.#nombre = value;
    }

    // Getter y Setter para imagen
    get imagen() {
        return this.#imagen;
    }

    set imagen(value) {
        this.#imagen = value;
    }

    // Getter y Setter para contraseña
    get descripcion() {
        return this.#descripcion;
    }

    set descripcion(value) {
        this.#descripcion = value;
    }
}