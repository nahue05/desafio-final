import React from 'react';
import { item } from './item';

export const itemList=({productos})=>{
return(
    <div className='container'>
        {productos.map((unProducto)=> <item key={unProducto.id} nombre={unProducto.nombre} precio={unProducto.precio} img={unProducto.img}/>)}
    </div>
)
}
