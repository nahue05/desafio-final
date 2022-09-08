import React from 'react';
import './App.css'; 
export const Item = ({id, img, nombre, precio})=>{
    return(

<div key={id} className='cardContent'>
            <div className='card'>
                    <img src={img} className='imagenCard'/>
                    <p className='tituloCard'>{nombre}</p>
                    <p className='precioCard'>Precio: ${precio}</p>
                    <button className='botonCard'>Ver Más</button>
            </div>
            
        </div>
    )
}
export default Item;