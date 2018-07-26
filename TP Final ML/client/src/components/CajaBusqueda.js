import React, { Component } from 'react';
import './../css/CajaBusqueda.css';      

class CajaBusqueda extends Component { 
    
    render() {
        return (    
          <div className='resultado'>  
            <form action="/items" method="get">
                <input id="busqueda" type="text" name="busqueda" placeholder="Explorar">Nunca dejes de Buscar</input>
                <input type="submit"></input>
            </form>
          </div>
        ); 
    }
}

export default CajaBusqueda;