function iniciar(){
	botonEscribir.addEventListener("click",escribirTexto);
	botonResetear.addEventListener("click",resetear);

}
function escribirTexto(){
	parrafo.textContent= cajaTexto.value;

}
function resetear(){
	parrafo.textContent="";
	cajaTexto.value="";
	cajaTexto.focus();

}
window.addEventListener("load",iniciar);