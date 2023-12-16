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

const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault(); // evita que se recargue la pagina al enviar el formulario
    const userName=document.querySelector("#username").value;
    const password=document.querySelector("#password").value;
    const adm = JSON.parse(localStorage.getItem('adminKey'))
    if(adm.usuario === userName && adm.contrasenia === password){
        alert('entro');
        window.location.href = 'administracion.html'
    }
    else{
        alert('no entro')
    }
});
