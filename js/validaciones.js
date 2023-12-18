export const validarCantidadCaracteres = (texto, min , max)=>{
    return texto.length >= min && texto.length <= max ? true : false
}

export const validarEnlace= (texto) =>{
    var expresionRegular = /^(ftp|http|https):\/\/[^ "]+$/;

    return expresionRegular.test(texto);
}

export function validarFormatoMS(texto) {
    var expresionRegular = /^([0-5][0-9]):([0-5][0-9])$/;
  
    return expresionRegular.test(texto);
  }
