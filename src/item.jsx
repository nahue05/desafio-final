import React from 'react';

export const item = ({nombre,img,precio,id})=>{
    return(

        
<div key={item.id} className='cardContent'>
                <div className='card'>
                    <img src={item.img} className='imagenCard'/>
                    <p className='tituloCard'>{item.nombre}</p>
                    <p className='precioCard'>Precio: ${item.precio}</p>
                </div>
            
        </div>
    )
}
