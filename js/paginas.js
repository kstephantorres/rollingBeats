 
//ocultar el registrar e iniciar seccion
function mostrar(){
 const navAdm = document.querySelector('#nav-adm');
 const validar = JSON.parse(localStorage.getItem('log-acces'))
 if(validar === true){
    navAdm.className = 'd-block';
 }
 else{
    navAdm.className = 'd-none';
 }
}

mostrar();