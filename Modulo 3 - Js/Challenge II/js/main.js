// Variables globales
var paises = ["Argentina", "Uruguay", "Chile", "Bolivia", "Paraguay", "Brasil"];
var provincias = ["CABA","Bs As","Cordoba"];
var ciudades = [{"nombre":"Bahía Blanca", "provincia":1}, {"nombre":"Villa Crespo", "provincia":0}, {"nombre":"Chivilcoy","provincia":1}, {"nombre":"Villa María", "provincia":2}];

var documentoTipo = ["DNI", "LE", "LC"];

var btnEnviar = document.getElementById("enviar"); //botón enviar
var btnLimpiar = document.getElementById("limpiar"); //botón limpiar

var comboProv = document.getElementById("provs"); //campo "provincia". Esta variable es global para que funcione el event listener de abajo

function cargarDocumentoTipo() {
	var comboDoc = document.getElementById("documento-tipo");
	for (i = 0; i < documentoTipo.length; i++) {
		var op = document.createElement("option");
		op.value = i;
		op.innerHTML = documentoTipo[i];
		comboDoc.appendChild(op);
	}
}

function cargarPaises() {
	var comboPais = document.getElementById("nacionalidad");
	paises.forEach(function(e) {
		var op = document.createElement("option");
		op.value = i;
		op.innerHTML = e;
		comboPais.appendChild(op);
	})
}

function cargarProvincias() {
	for (i = 0; i < provincias.length; i++) {
		var op = document.createElement("option"); //crea opciones dentro de la caja de select
		op.value = i; //asigna un valor a cada opción
		op.innerHTML = provincias[i]; //asigna una provincia (del array)
		comboProv.appendChild(op); //agrega la opción a la caja select
	}
}

function cargarCiudades() {
	var provId = comboProv.value; //valor seleccionado del campo "provincia"
	var cityField = document.getElementById("cityField"); // contenedor
	var comboCity = document.getElementById("citySelect"); //campo "ciudad"
	comboCity.innerHTML = ""; //borra las opciones que estaban de antes para cuando se elige una ciudad nueva
	for (i = 0; i < ciudades.length; i++) {
		if (ciudades[i].provincia == provId) {
			var op = document.createElement("option") //crea opciones
			op.value = i;
			op.innerHTML = ciudades[i].nombre;
			comboCity.appendChild(op);
		}
	}

	cityField.classList.remove("hidden");
}

// Validaciones
function validarEdad(edad) {
	var anioActual = 2018;
	var anioNacimiento = parseInt(document.querySelector('input[type="date"]').value.slice(0,4));	// agarra el valor del input y extrae los primeros 4 caracteres (el año)
	if ((anioActual - anioNacimiento) < 18) {
		var menorEdad = document.getElementById("menorEdad"); // mensaje de error
		menorEdad.style.visibility = "visible";
		menorEdad.textContent = "Debes ser mayor de edad";
	}
}

function validarTel(tel) {
	var tel = document.getElementById("telefono").value;
	if(tel !== "" && !/[0-9]{10}/.test(tel)) {
		var telError = document.getElementById("telError");
		telError.innerHTML = "Formato no válido";
	}
}

function validarMail(mail) {
	var mail = document.getElementById("email").value;
	if (mail.length != 0 && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail)) { // si no está vacío pero la regex no matchea (el test da false)
		var emailError = document.getElementById("emailError");//busco el contenedor del mensaje de error de email
		emailError.style.visibility = "visible";
		emailError.innerHTML = "Formato no válido" //y le pongo el mensaje de error
	}
}

function validarFormulario() {
	checkEmptyFields()


	// if (validarMail() && validarTel() && validarEdad()) {
	// 	alert("yay");
	// }
}

function checkEmptyFields() {
	var obligatorios = document.querySelectorAll(".obligatorio input, .obligatorio select"); //junta todos los inputs hijos de campos con clase "obligatorio"

		for (var i = 0; i < obligatorios.length; i++) {//recorro los campos obligatorios
			var campoObligatorio = obligatorios[i];
			if (campoObligatorio.type == "text" || campoObligatorio.type == "date") {//busco valor de inputs text y date
				if (campoObligatorio.value.length == 0) {//si está vacío
					showObError(campoObligatorio);//muestro error
				}
			}

			else if (campoObligatorio.tagName == "SELECT") {
				if (campoObligatorio.value < 0) {
					showObError(campoObligatorio);
				}
			}	

			function showObError(element) {
				var label = element.nextElementSibling; // busco el elemento que le sigue al input (la error label)
				label.style.visibility = "visible"; //muestro la label
			}
		}
}

cargarDocumentoTipo();
cargarProvincias();
cargarPaises();

comboProv.addEventListener('change',cargarCiudades); // cuando se eligió una provincia, carga las posibles ciudades
btnEnviar.addEventListener("click", checkEmptyFields);
btnLimpiar.addEventListener("click", function(e) { //función extra del botón reset
	e.preventDefault();
	var errorMsgs = Array.from(document.getElementsByClassName("error")); //esconde todos los mensajes de error
	errorMsgs.forEach(function(msg) {
		msg.style.visibility = "hidden";
	});
});