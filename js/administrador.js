import { Cancion } from "./classCancion.js"
import { validarCantidadCaracteres, validarEnlace, validarFormatoMS } from "./validaciones.js"

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
                <button class="btn btn-primary boton-grilla mb-1" type="button"  onclick="editarCancion('${cancion.id}')" data-bs-toggle="modal" data-bs-target="#modalCancion"> <span class="texto-boton">Editar</span> <i class="bi bi-pencil-fill px-1"></i></button>
                <button type="button" class="btn btn-danger boton-grilla mb-1" onclick="borrarCancion('${cancion.id}')"><span class="texto-boton">Borrar</span><i class="bi bi-x-circle-fill borrar px-1"></i></button>
            </div>
        </li>
        `
}

window.editarCancion=(idCancion)=>{
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


window.borrarCancion=(idCancion)=>{  
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
    limpiarFormulario()
})



const borrarFila=(posicionCancion)=>{
    listaCanciones.removeChild(listaCanciones.children[posicionCancion+1])    
}


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
        
        if(validarCantidadCaracteres(titulo, 1, 50)
            && validarCantidadCaracteres(artista, 1, 50)
            && validarCantidadCaracteres(categoria, 3, 20) 
            && validarCantidadCaracteres(imagen, 8, 300)
            && validarEnlace(imagen)
            && validarCantidadCaracteres(duracion, 4, 5) 
            && validarFormatoMS(duracion)
            && validarCantidadCaracteres(album, 1, 40)
            && validarCantidadCaracteres(cancion, 8, 300)
            && validarEnlace(cancion)
            ){
            
            const nuevaCancion = new Cancion(titulo,artista,categoria,imagen,duracion,album,cancion)
            canciones.push(nuevaCancion)
            
            guardarLocalStorage()
            limpiarFormulario()
            crearLi(nuevaCancion)
        }else{
            alert('Ingreso datos invalidos')
        }
    }else if(btnAgregar.innerText === 'Modificar'){
            if(validarCantidadCaracteres(inputs[0].value, 1, 50)
                && validarCantidadCaracteres(inputs[1].value, 1, 50)
                && validarCantidadCaracteres(inputs[2].value, 3, 20) 
                && validarCantidadCaracteres(inputs[3].value, 8, 300)
                && validarEnlace(inputs[3].value)
                && validarCantidadCaracteres(inputs[4].value, 4, 5) 
                && validarFormatoMS(inputs[4].value)
                && validarCantidadCaracteres(inputs[5].value, 1, 40)
                && validarCantidadCaracteres(inputs[6].value, 8, 300)
                && validarEnlace(inputs[6].value)
            ){
                canciones[posicionActual].titulo = inputs[0].value
                canciones[posicionActual].artista = inputs[1].value
                canciones[posicionActual].categoria = inputs[2].value
                canciones[posicionActual].imagen = inputs[3].value
                canciones[posicionActual].duracion = inputs[4].value
                canciones[posicionActual].album = inputs[5].value
                canciones[posicionActual].cancion = inputs[6].value
                guardarLocalStorage()
                actualizarLi(posicionActual,inputs[3].value,inputs[0].value,inputs[1].value,inputs[5].value)
            }else{
                alert('Ingreso datos invalidos')
            }
            
        btnAgregar.innerText = 'Agregar'
        
    }
       
    btnCloseModal.click()
})