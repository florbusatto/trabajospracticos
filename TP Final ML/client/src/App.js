import React, { Component } from 'react'; 
import { render } from 'react-dom'   
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import logo from './img/logo.png'; 
import CajaBusqueda from './componentes/CajaBusqueda';  	
import ResultadoBusqueda from './componentes/ResultadoBusqueda';
import DetalleProducto from './componentes/DetalleProducto'; 
import './App.css';

class App extends Component { 
 
  render() {
    return(  
             <Router>
                    <div>
                        <Switch>
                          <Route exact path="/" componentes={CajaBusqueda}/>
                          <Route exact path="/items?search=" componentes={ResultadoBusqueda}/> 
                          <Route exact path="/items/:id" componentes={DetalleProducto}/>
                        </Switch>
                    </div>    
             </Router>
           );
    }
}

export default App;