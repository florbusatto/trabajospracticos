	
	
var cumplesStorage = localStorage.getItem("cumples");	
var cumples = JSON.parse(cumplesStorage).cumples;
	
//localStorage.clear()//
	
function proximosCumples () {
$.each(cumples,function(index,elem){	
     let li = `<li><p><span>${elem.fechaNac}</span>${elem.nombre}</p>	
      			<a href=# class="borrar" "data-id" =
     </li>`;		
     		 $('#cumples').append(li);	
  });	
}	

function cumpleDelDia(){		

 let indice = Math.floor (Math.random() * (cumples.lenght);
 while(indice == cumples.lenght){
 	indice = Math.floor(Math.random() * (cumples.lenght);
 }
 let cumpleHoyImg = cumples[indice].imagen;	
 let cumpleHoyName = cumples[indice].nombre;	

 let h1 = `<h1>${cumpleHoyName}</h1>`;	
 let img = `<img src= "img/${cumpleHoyImg}.png">`;	

 $('#cumple-dia').append(h1);	
 $('#cumple-dia').append(img);
}	

$('.borrar').on('click',e=>{	
   e.preventDefault();	
   let li = $(this);	
   li.parent().remove(); //borro del html//	
   let indice = li.data('id');	
   cumples.splice(indice,1);	
   let jSon = JSON.parse(cumplesStorage);	
   jSon.cumples = cumples;
});	

cumpleDelDia();	
