export class Admin {
    
    #id
    #usuario
    #email
    #contrasenia

    constructor(usuario, email, contrasenia) {
        this.#id = crypto.randomUUID();
        this.#usuario = usuario;
        this.#email = email;
        this.#contrasenia = contrasenia;
    }

    // Getter y Setter para id
    get id() {
        return this.#id;
    }

    // Getter y Setter para usuario
    get usuario() {
        return this.#usuario;
    }

    set usuario(value) {
        this.#usuario = value;
    }

    // Getter y Setter para email
    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    // Getter y Setter para contraseña
    get contrasenia() {
        return this.#contrasenia;
    }

    set contrasenia(value) {
        this.#contrasenia = value;
    }
    toJSON(){
        return {
            id: this.id,
            usuario: this.usuario,
            email: this.email,
            contrasenia: this.contrasenia
        }
    }
}