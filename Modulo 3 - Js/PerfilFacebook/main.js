
//1: Me traigo los elementos de HTML.//

var h1= perfil.getElementsById("Nombre");	
var nombre = h1.textcontent;	
var h2 = perfil.getElementsById("Edad");	
var edad= h2.textcontent;

function validarEdad(x){	
(int) var edad = parseInt (x);	
 if (edad >= 18){	
     return true;
 }else{	
       return false;
 }

//2: Puedo crear nodos.//
//Para guardar nodo del tipo div.//
div1=document.createElement ("Div");	
document.onload ();

//3 Agregar elementos a HTML//

var perfil = document.getElementsById ("perfil");	
perfil.apppend(div1);//(nuevo nodo)//