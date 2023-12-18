import {canciones} from "./app.js"
import { actualizarLista } from "./app.js";

const formularioBuscador = document.querySelector('form');
const sinResultadosMensaje = document.getElementById('sinResultados');
const contenedorLista = document.querySelector('.contenedorLista');

function buscarTexto(e){
    e.preventDefault();
    const inputBuscador = document.querySelector('.buscador');
    const terminoBusqueda = inputBuscador.value.toLowerCase();
    const resultados = canciones.filter(cancion =>
        cancion.titulo.toLowerCase().includes(terminoBusqueda) ||
        cancion.artista.toLowerCase().includes(terminoBusqueda)
        );
    
    if (resultados.length === 0){
        sinResultadosMensaje.className = 'd-block';
        contenedorLista.className = 'd-none';
    }else{
        sinResultadosMensaje.className = 'd-none';
        contenedorLista.className = 'd-block';
        actualizarLista(resultados);
    }
    limpiarBuscador();
}

function limpiarBuscador(){
    formularioBuscador.reset();
}

formularioBuscador.addEventListener('submit', buscarTexto)