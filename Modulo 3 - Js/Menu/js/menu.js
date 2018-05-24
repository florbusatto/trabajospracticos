class Menu{	

    construct(entrada, principal, postre, bebida){	

    this._entrada = entrada;
    this._principal = principal;	
    this._postre = postre;
    this._bebida = bebida;
    this._precio = 180;
 }

 /**
  * Parametros entrada Objeto
  *
  **/	

 set entrada(value){

 	 this._entrada = value;
 }

 get entrada(){

 	return this._entrada;

 }


}