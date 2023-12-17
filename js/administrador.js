import { Cancion } from "./classCancion.js"

const canciones= JSON.parse(localStorage.getItem('cancionesKey')) || []
const listaCanciones= document.querySelector('#listaCanciones')
const formAgregarCancion = document.querySelector('#formAgregarCancion')

const btnAgregar = document.querySelector('#btnAgregar')

// ----------------------------------- F U N C I O N E S
const guardarLocalStorage =()=>{
    // 'cancionesKey' es el nombre que va a tener nuesto objeto JSON en el local storage     
    localStorage.setItem('cancionesKey', JSON.stringify(canciones))
    
}
const limpiarFormulario =()=>{
    formAgregarCancion.reset()
}
const cargaInicial = ()=>{
    if(canciones.length > 0)
    {
        canciones.forEach((cancion) => {
            crearLi(cancion)
        });
    }
}

const crearLi=(cancion)=>{
    listaCanciones.innerHTML += `
        <li class="list-group-item d-flex align-items-center justify-content-around m-2 row fila-grilla">
            <div class=" col-4 col-sm-3 col-lg-2 img-grilla">
                <img class="img-alum foto-grilla" src="${cancion.imagen}" alt="Album ${cancion.album}">
            </div>
            <div class=" col-4 col-sm-3 col-lg-2">
                <h6 class="tema">${cancion.titulo}</h6>
            </div>
            <div class=" col-2 col-sm-3 col-lg-2 artista-grilla">
                <p>${cancion.artista}</p>
            </div>
            <div class="  col-2 col-lg-2 album-grilla">
                <p>${cancion.album}</p>
            </div>
            <div class=" col-4 col-sm-3  col-lg-2 iconos">
                <a href="../pages/detalleMaquetado.html" class="btn btn-primary boton-grilla mb-1" role="button"  onclick="editarContacto('${cancion.id}')"> <span class="texto-boton">Editar</span> <i class="bi bi-pencil-fill px-1"></i></a>
                <button type="button" class="btn btn-danger boton-grilla mb-1" onclick="borrarContacto('${cancion.id}')"><span class="texto-boton">Borrar</span><i class="bi bi-x-circle-fill borrar px-1"></i></button>
            </div>
        </li>
        `
}



window.borrarContacto=(idCancion)=>{  
    // Animacion para confirmar o aprobar la elimiacion de un contacto
    Swal.fire({
        title: "¿Estas seguro?",
        text: "No podras recuperar los datos borrados.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borralo!",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            // aqui ponemos logica para borrar 
            const posicionCancion = (canciones.findIndex((cancion)=>cancion.id === idCancion))+1   
            canciones.splice(posicionCancion,1)
            guardarLocalStorage()
            borrarFila(posicionCancion)
            // 
          Swal.fire({
            title: "Borrado!",
            text: "El contacto fue borrardo.",
            icon: "success"
          });
        }
      });
}

const borrarFila=(posicionCancion)=>{
    listaCanciones.removeChild(listaCanciones.children[posicionCancion])    
}

window.detalleCancion=(idCancion)=>{
    const url = window.location
    //Luego del signo de pregunta (?) en el url son parametros
    url.href = `${url.origin}/pages/detalleMaquetado.html?id=${idCancion}`
}

window.editarContacto=(idCancion)=>{
    const url = window.location
    url.href = `${url.origin}/pages/modificarCancion.html?id=${idCancion}`
}

cargaInicial()

formAgregarCancion.addEventListener('submit',(event)=>{
    event.preventDefault()
    const inputs = document.querySelectorAll('.inputAgregar')

        const titulo = inputs[0].value
        const artista = inputs[1].value
        const categoria = inputs[2].value
        const imagen = inputs[3].value
        const duracion = inputs[4].value
        const album = inputs[5].value
        const cancion = inputs[6].value
    const nuevaCancion = new Cancion(titulo,artista,categoria,imagen,duracion,album,cancion)
        canciones.push(nuevaCancion)
        
        guardarLocalStorage()
        limpiarFormulario()
        crearLi(nuevaCancion)
    
   
})