import Miembro from "./classMiembros.js";

const fernando = new Miembro('Fernando Bosch', '../img/nosotros/img-Fernando.jpeg', 'Hola! Soy Fernando Bosch, tengo 24 años, me apasiona el deporte y estudio programación en Rolling Code.')
const javier = new Miembro('Javier Jiménez', '../img/nosotros/img-Javier.png', 'Hola! Soy Javier Jiménez, me gusta Taylor Swift, no me gusta Arduino y soy hincha de River.')
const lourdes = new Miembro('Lourdes Ocampo', '../img/nosotros/img-Lourdes.jpeg', 'Hola! Soy Lourdes Ocampo, estoy estudiando la carrera de profesorado en Inglés, me quedan un par de finales para recibirme.')
const leonel = new Miembro('Leonel Ramella', '../img/nosotros/img-Leonel.png', 'Hola! Soy Leonel Ramella, me gusta diseñar páginas y jugar bien al Valorant.')
const andres = new Miembro('Andrés Santamarina', '../img/nosotros/img-Andres.jpg', 'Hola! Soy Andrés Santamarina, hago freestyle fútbol, no duermo y soy hincha de River.')
const kevin = new Miembro('Kevin Torres', '../img/nosotros/img-Kevin.jpg', 'Hola! Soy Kevin Torres, soy de Jujuy y trabajo los fines de semana.')

const miembros = [fernando, javier, lourdes, leonel, andres, kevin];
const contenedorModal = document.getElementById('contenedorModal')