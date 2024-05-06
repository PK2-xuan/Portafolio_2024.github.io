// js de la funcion de carga de informacion de acuerdo a la opcion
// function mostrarContenedor(id) {

//   var contenedores = document.querySelectorAll(
//     ".container1, .container2, .container3, .container4"
//   );

//   for (var i = 0; i < contenedores.length; i++) {
//     contenedores[i].style.display = "none";
//   }

//   var contenedorMostrar = document.querySelector("." + id);
//   contenedorMostrar.style.display = "block";
// }

function mostrarContenedor(id) {
  // Oculta la sección "Presentación"
  document.getElementById("presentacion").style.display = "none";

  // Muestra el contenedor correspondiente al ID proporcionado
  var contenedorMostrar = document.querySelector("." + id);
  if (contenedorMostrar) {
    contenedorMostrar.style.display = "block";
  } else {
    console.error("No se encontró el contenedor con ID: " + id);
  }
}
//

//
function mostrarContenedorParcial(id) {
  var contenedorMostrar = document.querySelector("." + id);
  if (contenedorMostrar) {
    contenedorMostrar.style.display = "block";
    document.getElementById("container1").style.display = "none";
  } else {
    console.error("No se encontró el contenedor con ID: " + id);
  }
}
//

function retroceder() {
  // Oculta el contenedor actual
  document.querySelector(".container4").style.display = "none";
  // Muestra el contenedor anterior
  document.querySelector(".container1").style.display = "block";
}
