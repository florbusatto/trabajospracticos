// Creo un objeto producto vacio para guardar la información//
//Inicio el carrito de comprar indicando si hay o no productos guardados//
var producto = {};
var carritoStorage = localStorage.getItem("carrito");

if(carritoStorage == null carritoStorage == undefined || carritoStorage.length == 0){
	console.log ("Tu carrito esta vacio");
	var carrito = [];
}else{
	carrito = JSON.parse(carritoStorage).productos;
	console.log("Tu carrito tiene productos guardados")
}

//Declaro la funciòn de cada uno de los productos de mi carrito//

function chequearExistencia(producto){

	let cod = producto.codigo; 
	let encontrado = false;
	let i = 0;
	while(!encontrado && i<carrito.length){ 
		if(carrito[i].producto.cod == cod){
			 return i; 	
		}
		i++;
	}
	return encontrado;
}

$('.add').on('click',function(e){

// Recupero la información del HTML

	let hermanos = $(this).siblings();
 	producto.url = hermanos[0].src;
	producto.descripcion = hermanos[1].innerText;
	producto.precio = hermanos[2].innerText;
	producto.stock = hermanos[3].innerText;
	producto.codigo = hermanos[4].innerText;
	producto.cantidad = hermanos[5].innerText;

	if(parseInt(producto.stock) >= parseInt(hermanos[5].value)){	
		let pos = chequearExistencia(producto);
		if(!pos){
			var item ={
				cantidad : parseInt(hermanos[5].value),
				producto : producto
			}
			console.log(item);
			carrito.push(item);
		}else{

			carrito[pos].cantidad += parseInt(hermanos[5].value);

		}	
		let jsonCarrito = {'productos': carrito};
		localStorage.setItem('carrito',JSON.stringify(jsonCarrito));
	
	}else{
		alert("No se agregó el producto, no hay stock suficiente.");
	}	

});

function calcularSubtotal(){

	let subtotal = 0;
	for(i=0;i<carrito.length;i++){

		subtotal += carrito[i].cantidad * parseFloat(carrito[i].producto.precio);
	}
	return subtotal;
}
//Clase 14/05 Ejercicio de Objetos en base al Carrito.Establecer métodos//

class MedioPago{	

   construct(){}	

   static calcularDescuento(monto,descuento){	
      let valor = (monto*descuento)/100;	
      return valor;

   }
   
   calcularRecargo(monto,nroCuotas){
   	    let recargo = 0;
   	    switch(nroCuotas){

   	   	  case 3: recargo = monto*1.05;
   	   	  break;
   	    }	

   	    return recargo;
   }

}















