var comidas = [
	{ "nombre" : "Tarta de jamón y queso", "plato" : "principal" },
	{ "nombre" : "Pollo al ajillo" , "plato" : "principal" },
	{ "nombre" : "Milanesa a la napolitana" , "plato" : "principal" },
	{ "nombre" : "Tira de Asado", "plato" : "principal" },
	{ "nombre" : "Ensalada mixta", "plato" : "guarnición" },
	{ "nombre" : "Papas fritas", "plato" : "guarnición" },	
	{ "nombre" : "Rabas", "plato" : "guarnición" },
	{ "nombre" : "Puré de zapallo", "plato" : "guarnición" },
	{ "nombre" : "Flan con crema", "plato" : "postre" },
	{ "nombre" : "Queso y dulce", "plato" : "postre" },
	{ "nombre" : "Mousse de chocolate", "plato" : "postre" },	
	{ "nombre" : "Granizado", "plato" : "postre" },
];

var opcionPrincipal = document.getElementById("opcion_principal");
var opcionGuarnicion = document.getElementById("opcion_guarnicion");
var opcionPostre = document.getElementById("opcion_postre");
var opcionesMenu = [opcionPrincipal, opcionGuarnicion, opcionPostre];


function cargarComidas() {
	for (i = 0; i < comidas.length; i++) {
		var option = document.createElement("option");
		option.textContent = comidas[i].nombre;

		if (comidas[i].plato == "principal") {
			opcionPrincipal.appendChild(option);
		}

		else if (comidas[i].plato == "guarnición") {
			opcionGuarnicion.appendChild(option);
		}

		else if (comidas[i].plato == "postre") {
			opcionPostre.appendChild(option);
		}
	}
}

function Ticket() {
	var items = document.getElementById("items");
	items.innerHTML = ""; 
	for (i = 0; i < opcionesMenu.length; i++) {
			var item = document.createElement("li");
			item.textContent = opcionesMenu[i].value;
			items.appendChild(item);
	}
}

cargarComidas();