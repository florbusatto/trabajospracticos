import React, { Component } from 'react'; 	   
import './../css/DetalleProducto.css';       

class DetalleProducto extends Component { 

  render() {
        return (    
          <div className='producto'>  
            <nav className='navBar'>  
             <a className='link'>Volver al listado | Celulares y Telèfonos > Celulare y Smartphones > Sony > Xperia > Otros modelos Xperia </a> 
            </nav>
            <section className='introProducto'>  
             <h3>Nuevo - 234 vendidos</h3>  
             <h1> Smartphone Xperia Xa1 Sony Store Blanco</h1>  
             <h2 className='precio'>$9999</h2>  
            </section>
            <figure>
                <img src=></img>
            </figure> 
            <figcaption>Descripciòn del producto</figcaption> 
            <h1 className='DescripcionProducto'>Características principales: Impresionante calidad de fotografía : Toma tus mejores fotografías con el conocimiento en cámaras de Sony. Xperia XA1 cuenta con una cámara de 23 MP con sensor Exmor RS™ para dispositivos móviles y lente F2.0. Más pixeles, más luz e imágenes inmejorables.
            Lente de ángulo amplio para selfies : La cámara frontal de 8 MP del Xperia XA1 cuenta con un lente de ángulo amplio de 23 mm que permite que salgan muchos amigos en la fotografía. El obturador de mano detecta automáticamente la palma de tu mano y toma tu selfie. 
            Diseño sin bordes que cabe en tu mano : Una forma suave y redondeada, y una pantalla de borde a borde de 5", que deja el marco apenas visible. Xperia XA1 se acomoda cómodamente en tu mano.
            Rendimiento poderoso : Con un procesador eficiente en consumo de energía, obtienes una experiencia de usuario más rápida y suave, ya sea que explores en la web, veas un video o te diviertas con tu juego favorito. Todo con un 4G superrápido.
            Velocidad óptima : Smart Cleaner desactiva automáticamente las aplicaciones que no usas y limpia la memoria caché para optimizar el almacenamiento.
            Más memoria : Agrega hasta 256 GB de memoria con una tarjeta Micro SD para guardar tus fotografías, videos y música.</h1>
        </div>
        ); 
    }
}

export default DetalleProducto;
