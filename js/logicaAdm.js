import { Admin } from "./classAdminstrador.js"

// creacion del objeto
const administrador = new Admin(
    'lourdes359',
    'lourdes.ocampos@gmail.com',
    'lourdes123'
);
// Guardar la cadena en el localStorage con una clave específica
    localStorage.setItem('adminKey',JSON.stringify(administrador));
   console.log(localStorage.getItem('adminKey'));


// funciones

//entrar a la pagina maquetadoAdmin cuando se aprete el boton de confirmar
document.querySelector('#btn-confirmar').addEventListener('click', entrarMaqAdmin);
function entrarMaqAdmin() {
    const usuario = document.querySelector('#username').value;
    const contrasena = document.querySelector('#password').value;
    // validaciones
        // verificando si los datos ingresados son correctos
        if (usuario === administrador.usuario && contrasena === administrador.contrasenia) {
            window.location.href = "administracion.html";
            alert('Usted inicio sessión');
            } else{
                mostrarError();
                limpiarFormulario();
            }
}

function mostrarError(){
    alert('Uno de los datos es incorrecto');
}
function limpiarFormulario(){
    document.getElementById("login-form").reset();
}