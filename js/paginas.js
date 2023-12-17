 
const btnSalir = document.querySelector('#boton_salir')
btnSalir.addEventListener('click', cerrarSesion);
const validar = JSON.parse(localStorage.getItem('log-acces'))
//ocultar el registrar e iniciar seccion
function mostrar(){

 const botonRegistrar = document.querySelector('#boton_registrar');
 const navAdm = document.querySelector('#nav-adm');
 if(validar === true){
   btnSalir.innerHTML = 'Salir';
   botonRegistrar.innerHTML = 'Cuenta'
   navAdm.className = 'd-flex';
   
 }
 else{
 navAdm.className = 'd-none';
   //  navRegistros.className = 'd-flex';
   //  navCerrarSession.className = 'd-none';
 }
}

function cerrarSesion(){
   if(validar==true){
      alert('Estas cerrando sessión');
      localStorage.removeItem('log-acces');
      window.location.href = 'login.html'
   }
    
}



mostrar();