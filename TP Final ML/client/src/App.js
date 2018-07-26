import React, { Component } from 'react'; 
import { render } from 'react-dom'   
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import logo from './img/logo.png'; 
import CajaBusqueda from './components/CajaBusqueda';  	
import ResultadoBusqueda from './components/ResultadoBusqueda';
import DetalleProducto from './components/DetalleProducto'; 
import './App.css';

class App extends Component { 
 
  render() {
    return(  
             <Router>
                    <div>
                        <Switch>
                          <Route exact path="/" components={CajaBusqueda}/>
                          <Route exact path="/items?search=" components={ResultadoBusqueda}/> 
                          <Route exact path="/items/:id" components={DetalleProducto}/>
                        </Switch>
                    </div>    
             </Router>
           );
    }
}

export default App;