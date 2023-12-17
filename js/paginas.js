 
const btnSalir = document.querySelector('#boton_salir')
btnSalir.addEventListener('click', cerrarSesion);
const validar = JSON.parse(localStorage.getItem('log-acces'))
//ocultar el registrar e iniciar seccion
function mostrar(){
 const navAdm = document.querySelector('#nav-adm');
 const navRegistros = document.querySelector('#contenedorNavBoton');
 const navCerrarSession = document.querySelector('#contenedorNavBotonAdm');

 if(validar === true){
    navAdm.className = 'd-flex';
    navRegistros.className = 'd-none';
    navCerrarSession.className = 'd-flex';
 }
 else{
    navAdm.className = 'd-none';
    navRegistros.className = 'd-flex';
    navCerrarSession.className = 'd-none';
 }
}

function cerrarSesion(){
    alert('Estas cerrando sessión');
    localStorage.removeItem('log-acces');
    window.location.href = 'login.html'
}



mostrar();