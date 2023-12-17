import { Cancion } from "./classCancion.js"

const canciones= JSON.parse(localStorage.getItem('cancionesKey')) || []
const listaCanciones= document.querySelector('#listaCanciones')
const formAgregarCancion = document.querySelector('#formAgregarCancion')
const btnCloseModal = document.querySelector('.btn-close')
const btnAgregar = document.querySelector('#btnAgregar')
let posicionActual=-1

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
                <button class="btn btn-primary boton-grilla mb-1" type="button"  onclick="editarContacto('${cancion.id}')" data-bs-toggle="modal" data-bs-target="#modalCancion"> <span class="texto-boton">Editar</span> <i class="bi bi-pencil-fill px-1"></i></button>
                <button type="button" class="btn btn-danger boton-grilla mb-1" onclick="borrarContacto('${cancion.id}')"><span class="texto-boton">Borrar</span><i class="bi bi-x-circle-fill borrar px-1"></i></button>
            </div>
        </li>
        `
}

window.editarContacto=(idCancion)=>{
    document.querySelector('.modal-title').innerHTML= 'Modificar Canción'
    btnAgregar.innerText = 'Modificar'

    const inputs = document.querySelectorAll('.inputAgregar')
    const posicionCancion = (canciones.findIndex((cancion)=>cancion.id === idCancion))   

    inputs[0].value= canciones[posicionCancion].titulo
    inputs[1].value= canciones[posicionCancion].artista
    inputs[2].value= canciones[posicionCancion].categoria
    inputs[3].value= canciones[posicionCancion].imagen
    inputs[4].value= canciones[posicionCancion].duracion
    inputs[5].value= canciones[posicionCancion].album
    inputs[6].value= canciones[posicionCancion].cancion
    posicionActual = posicionCancion
    
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
            const posicionCancion = (canciones.findIndex((cancion)=>cancion.id === idCancion))   
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

btnCloseModal.addEventListener('click',()=>{
    document.querySelector('.modal-title').innerHTML= 'Agregar Canción'
    btnAgregar.innerText = 'Agregar'
})



const borrarFila=(posicionCancion)=>{
    listaCanciones.removeChild(listaCanciones.children[posicionCancion+1])    
}

// window.detalleCancion=(idCancion)=>{
//     const url = window.location
//     //Luego del signo de pregunta (?) en el url son parametros
//     url.href = `${url.origin}/pages/detalleMaquetado.html?id=${idCancion}`
// }

// window.editarContacto=(idCancion)=>{
//     const url = window.location
//     url.href = `${url.origin}/pages/modificarCancion.html?id=${idCancion}`
// }

cargaInicial()

const actualizarLi=(posicionCancion,imagen,titulo,artista,album)=>{

        listaCanciones.children[posicionCancion+1].children[0].children[0].src= imagen
        listaCanciones.children[posicionCancion+1].children[1].children[0].innerText= titulo
        listaCanciones.children[posicionCancion+1].children[2].children[0].innerText= artista
        listaCanciones.children[posicionCancion+1].children[3].children[0].innerText= album

}

formAgregarCancion.addEventListener('submit',(event)=>{
    event.preventDefault()
    const inputs = document.querySelectorAll('.inputAgregar')
    if(btnAgregar.innerText === 'Agregar'){
    document.querySelector('.modal-title').innerHTML= 'Agregar Canción'
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
    }
   else if(btnAgregar.innerText === 'Modificar')
   {
            canciones[posicionActual].titulo = inputs[0].value
            canciones[posicionActual].artista = inputs[1].value
            canciones[posicionActual].categoria = inputs[2].value
            canciones[posicionActual].imagen = inputs[3].value
            canciones[posicionActual].duracion = inputs[4].value
            canciones[posicionActual].album = inputs[5].value
            canciones[posicionActual].cancion = inputs[6].value
            guardarLocalStorage()
            actualizarLi(posicionActual,inputs[3].value,inputs[0].value,inputs[1].value,inputs[5].value)
        btnAgregar.innerText = 'Agregar'
   }
    btnCloseModal.click()
})