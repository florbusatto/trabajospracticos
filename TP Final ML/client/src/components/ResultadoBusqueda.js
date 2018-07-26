import React, { Component } from 'react';
import './../css/ResultadoBusqueda.css';	    

class ResultadoBusqueda extends Component { 	

  constructor (props) {//Para poder mostrar los datos tengo que crear mi estado donde guardo la info, el estado siempre es un objeto de Js)
   super(props);

   this.state = {
     items: [],
   }
 }

 componentDidMount () { // Conecto la info del Back con el Front, trayendome la info//
   fetch('/items')
     .then( response => {
       return response.json()// 1erThen: Interpreta la info en un Json.Fetch funciona distinto a Axios,contesta con un flujo de datos desconocidos(stream), como sera que sera un Json colocar el return Json//
     })
     .then(data => {//2doThen: Devuelve el 1er then. Data es el valor que quiero setear a items//
       this.setState({ items: data.items})
     })
     .catch(err => {
     })
 }
 render(){
   var mis_items = this.state.items.map(i => { //Transforma cada uno de los elementos en Div//
     return <div className='detalleItems'>{},{}</div>
   })
     return (    
             {mis_items}
        ); 
    }
}

export default ResultadoBusqueda;
             