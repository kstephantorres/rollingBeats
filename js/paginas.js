 
//ocultar el registrar e iniciar seccion
function mostrar(){
 const navAdm = document.querySelector('#nav-adm');
 const navRegistros = document.querySelector('#contenedorNavBoton');
 const navCerrarSession = document.querySelector('#contenedorNavBotonAdm');

 const validar = JSON.parse(localStorage.getItem('log-acces'))
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

mostrar();