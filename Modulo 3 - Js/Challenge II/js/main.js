var paises = ["Argentina","Brasil","Chile","Paraguay","Uruguay",];
var provincias = ["CABA","Bs As","Chubut"];
var ciudades = [{"nombre":"Caballito", "provincia":0}, {"nombre":"Tandil", "provincia":1}, {"nombre":"San Martín de los Andes", "provincia":2}];
var documentoTipo = ["DNI", "LE", "LC"];
var botonEnviar = document.getElementById("enviar"); 
var botonLimpiar = document.getElementById("limpiar"); 
var comboBoxProv = document.getElementById("provincias"); 

function cargarDocumentoTipo() {
	var comboBoxDoc = document.getElementById("tipoDoc");
	for (i = 0; i < tipoDoc.length; i++) {
		var op = document.createElement("option");
		op.value = i;
		op.innerHTML = tipoDoc[i];
		comboBoxDoc.appendChild(op);
	}
}

function cargarPaises() {
	var comboBoxPais = document.getElementById("nacionalidad");
	paises.forEach(function(e) {
		var op = document.createElement("option");
		op.value = i;
		op.innerHTML = e;
		comboBoxPais.appendChild(op);
	})
}

function cargarProvincias() {
	for (i = 0; i < provincias.length; i++) {
		var op = document.createElement("option"); //Crea opciones dentro de la caja desplegable de select.
		op.value = i; //Asigna un valor a cada opción.
		op.innerHTML = provincias[i]; //Asigna una provincia (del array provincias).
		comboBoxProv.appendChild(op); //Agrega la opción PROVINCIA a la caja select.
	}
}

function cargarCiudades() {
	var provId = comboBoxProv.value; //Valor seleccionado del campo "provincia"
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

function validarEdad(edad) {
	var actual = 2018;
	var anioNac = parseInt(document.querySelector('input[type="date"]').value.slice(0,4));// Toma el valor del input y extrae los primeros 4 caracteres (el año)
	if ((actual - anioNac) < 18) {
		var menorEdad = document.getElementById("menorEdad"); 
		menorEdad.style.visibility = "visible";
		menorEdad.textContent = "Debes ser mayor de 18 años";
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
	if (mail.length != 0 && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail)) { 
		var emailError = document.getElementById("emailError");
		emailError.style.visibility = "visible";
		emailError.innerHTML = "Formato no válido" 
	}
}

function validarFormulario() {
	checkEmptyFields()

}

function checkEmptyFields() {
	var obligatorios = document.querySelectorAll(".Obligatorio input, .Obligatorio select"); //junta todos los inputs hijos de campos con clase "obligatorio"

		for (var i = 0; i < obligatorios.length; i++) {
			var campo_Obligatorio = obligatorios[i];
			if (campo_Obligatorio.type == "text" || campo_Obligatorio.type == "date") {//busco valor de inputs text y date
				if (campo_Obligatorio.value.length == 0) {
					showerror(campo_Obligatorio);
				}
			}

			else if (campo_Obligatorio.tagName == "SELECT") {
				if (campo_Obligatorio.value < 0) {
					showerror(campo_Obligatorio);
				}
			}	

			function showerror(element) {
				var label = element.nextElementSibling; // busco el elemento que le sigue al input (la error label)
				label.style.visibility = "visible"; //muestro la label
			}
		}
}

cargarDocumentoTipo();
cargarProvincias();
cargarPaises();

comboBoxProv.addEventListener('change',cargarCiudades); // cuando se eligió una provincia, carga las posibles ciudades.
botonEnviar.addEventListener("click", checkEmptyFields);
botonLimpiar.addEventListener("click", function(e) { //función extra del botón reset
	e.preventDefault();
	var errorMsgs = Array.from(document.getElementsByClassName("error")); //Esconde los mensajes de error.
	errorMsgs.forEach(function(msg) {
		msg.style.visibility = "hidden";
	});
});