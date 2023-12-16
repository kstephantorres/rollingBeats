import { Admin } from "./classAdminstrador.js"

// creacion del objeto
const administrador = new Admin(
    'lourdes359',
    'lourdes.ocampos@gmail.com',
    'lourdes123'
);
// Guardar la cadena en el localStorage con una clave específica
    localStorage.setItem('adminKey',JSON.stringify(administrador));
   console.log(localStorage.getItem('adminKey'));


