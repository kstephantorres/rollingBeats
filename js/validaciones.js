export const validarCantidadCaracteres = (texto, min , max)=>{
    return texto.length >= min && texto.length <= max ? true : false
}

export const validarEnlace= (texto) =>{
    var expresionRegular = /^(ftp|http|https):\/\/[^ "]+$/;

    return expresionRegular.test(texto);
}

export function validarFormatoMS(texto) {
    // Expresión regular para verificar el formato de minutos y segundos (MM:SS)
    var expresionRegular = /^([0-5][0-9]):([0-5][0-9])$/;
  
    // Verificar si el texto coincide con la expresión regular
    return expresionRegular.test(texto);
  }
