import React from 'react';
import './App.css'; 
import ItemCounter from 'ItemCounter'
export const Detail = ({id, img, nombre, precio, maximo})=>{
    function onAdd (ItemCounter)

    return(

<div key={id} className='cardContent'>
            <div className='card'>
                    <img src={img} className='imagenCard'/>
                    <p className='tituloCard'>{nombre}</p>
                    <p className='precioCard'>Precio: ${precio}</p>
                    <ItemCounter maximo={maximo} onAdd={onAdd}/>
            </div>
        </div>
    )
}
export default Detail;