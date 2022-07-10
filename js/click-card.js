/*index.html*/
/*card-01*/
function mostrarTarjeta() {
  document.getElementById("frente").style.display = "none";
  document.getElementById("dorso").style.display = "flex";
}
function ocultarTarjeta() {
  document.getElementById("dorso").style.display = "none";
  document.getElementById("frente").style.display = "flex";
}

//card-02
function mostrarTarjetaTwo() {
  document.getElementById("frente-two").style.display = "none";
  document.getElementById("dorso-two").style.display = "flex";
}
function ocultarTarjetaTwo() {
  document.getElementById("dorso-two").style.display = "none";
  document.getElementById("frente-two").style.display = "flex";
}
