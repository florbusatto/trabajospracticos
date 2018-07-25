$.ajax({
	url: "/paises",
	dataType: "json",
}).done(function(data) {
	data.paises.forEach(function(element) {
        let option = `<option value="${element.nombre}">${element.nombre}</option>`
        $("#paises").append(option);
    })
})
$.ajax({
	url: "/preguntas",
	dataType: "json",
}).done(function(data) {
	data.preguntas.forEach(function(element) {
		let pregunta = $(`<div id="${element.name}"><h3>${element.pregunta}</h3></div>`);
		element.opciones.forEach(function(elem) {
			var respuestas = $(`<label class="radioLbl" for="${elem}"><input type='radio' class="radioBtn" name='${element.name}' value='${elem}' id='${elem}'>${elem}</label>`);
			pregunta.append(respuestas);
		})		
		$('form').append(pregunta);
	})
	$('form').append($(`<div class="btn"><input id="enviar" type='button' value='Enviar'></div>`));
	$('form').append($("<div class='error' style='display:none'></div>"));
})

function mostrarRespuestas(respuesta) {
		let fila = `<tr data-id="${respuesta.id}"><td><input type="checkbox"></td> <td>${respuesta.pais}</td> <td>${respuesta.lenguajes}</td><td>${respuesta.nivel}</td> <td>${respuesta.sistema}</td> <td>${respuesta.editor}</td><td><i class="fas fa-trash"></i></td> </tr>`;
		$('#table').append(fila);
		piePaises();
}

let respuestas = (JSON.parse(localStorage.getItem("respuestas")) || []);
if (respuestas.length > 0) {
	respuestas.forEach(mostrarRespuestas);
}

$(document).on('click', "#enviar" ,function(){
	let pais = $('#paises option:selected').val();
	let lenguajes = ($('input:radio[name=lenguajes]:checked').val());
	let sistema = ($('input:radio[name=sistema]:checked').val());

	if (pais && lenguajes && sistema) {
		let	respuesta = {
			pais: pais,
			lenguajes: lenguajes,
			sistema: sistema,
		}
		respuestas.push(respuesta);
		let id = respuestas.indexOf(respuesta);
        respuesta.id = id;
		console.log(respuesta, id)

		localStorage.setItem("respuestas", JSON.stringify(respuestas));
		mostrarRespuestas(respuesta);
		$("form")[0].reset();
		$(".error").css("display", "none");
	}

	else {
		$(".error").text("Faltan datos").css("display", "block")
	}
})

$(document).on('click', ".fas", function(){
	let id = $(this).closest("tr").data("id");
	respuestas.splice(id, 1);
	localStorage.setItem("respuestas", JSON.stringify(respuestas));
	$(this).closest("tr").remove();
});

function piePaises(){
	let resp = JSON.parse(localStorage.getItem("respuestas"));
	let ARG = 0;
	let BEL = 0;
	let CAN = 0;
	let ESP = 0;
	let USA = 0;
	let ING = 0;	
	let ITA = 0;	
	let JAP = 0;
	console.log(resp);
	for (var i = 0; i < resp.length; i++) {
	var pais = resp[i].pais;	
		if (pais == "Argentina") {
			ARG++;
		} else if (pais == "Bèlgica") {
			BEL++;
		} else if (pais == "Canadà") {
			CAN++;
		} else if (pais == "España") {
			ESP++;
		} else if (pais == "Estados Unidos") {
			USA++;
		} else if (pais == "Inglaterra") {
			ING++;
		}	
	    } else if (pais == "Italia") {
			ITA++;
		}	
	    } else if (pais == "Japòn") {
			JAP++;
		}
	}
		
//localStorage.clear();