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

    
//datos globales
let validar = false;

// funciones
//funcion para validar datos

const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault(); // evita que se recargue la pagina al enviar el formulario
    const userName=document.querySelector("#username").value;
    const password=document.querySelector("#password").value;
    const adm = JSON.parse(localStorage.getItem('adminKey'))
    if(adm.usuario === userName && adm.contrasenia === password){
        alert(`Bienvenido ${adm.usuario}`);
        validar = true;
        localStorage.setItem('log-acces', JSON.stringify(validar))
        window.location.href = 'administracion.html'
        
    }
    else{
        alert('Usuario o contraseña invalidos');
        limpiarFormulario();
    }
});
//funcion borrar datos del formulario
function limpiarFormulario(){
    const formulario = document.querySelector('#login-form');
    formulario.reset();
}