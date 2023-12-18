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

   
    get id() {
        return this.#id;
    }

    get usuario() {
        return this.#usuario;
    }

    set usuario(value) {
        this.#usuario = value;
    }

    
    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }


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