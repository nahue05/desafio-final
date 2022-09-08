import React from 'react';

export const Item = ({id, img, nombre, precio})=>{
    return(

        
<div key={id} className='cardContent'>
                <div className='card'>
                    <img src={img} className='imagenCard'/>
                    <p className='tituloCard'>{nombre}</p>
                    <p className='precioCard'>Precio: ${precio}</p>
                </div>
            
        </div>
    )
}
export default Item;