const btnSalir = document.querySelector('#boton_salir');
const botonRegistrar = document.querySelector('#boton_registrar');
const navAdm = document.querySelector('#nav-adm');
const validar = JSON.parse(localStorage.getItem('log-acces'));

btnSalir.addEventListener('click', cerrarSesion);

function mostrar() {
  if (validar === true) {
    navAdm.classList.add('d-flex');
    btnSalir.style.transition = 'opacity 0.5s ease-in-out';
    btnSalir.style.opacity = 0;
    botonRegistrar.style.transition = 'opacity 0.5s ease-in-out';
    botonRegistrar.style.opacity = 0;
    
    setTimeout(() => {
      btnSalir.textContent = 'Salir';
      btnSalir.style.opacity = 1;
      botonRegistrar.textContent = 'Cuenta';
      botonRegistrar.style.opacity = 1;
    }, 600);
  } else {
    navAdm.classList.add('d-none');
  }
}

function cerrarSesion() {
  if (validar === true) {
    alert('Estás cerrando sesión');
    localStorage.removeItem('log-acces');
    window.location.href = 'login.html';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  mostrar();
});
