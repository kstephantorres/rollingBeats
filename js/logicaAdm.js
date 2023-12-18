import { Admin } from "./classAdminstrador.js"


const administrador = new Admin(
    'lourdes359',
    'lourdes.ocampos@gmail.com',
    'lourdes123'
);

    localStorage.setItem('adminKey',JSON.stringify(administrador));
    console.log(localStorage.getItem('adminKey'));

    

let validar = false;



const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault(); 
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

function limpiarFormulario(){
    const formulario = document.querySelector('#login-form');
    formulario.reset();
}