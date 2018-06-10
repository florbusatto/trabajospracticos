var selectLevel = document.getElementById("nivel"); 
var valor;

selectLevel.addEventListener("change", getValor);

function getValor(){
	valor = selectLevel.value;		
	var local = {"selectvalor": valor}	
    localStorage.setItem("nivel",valor)
}

