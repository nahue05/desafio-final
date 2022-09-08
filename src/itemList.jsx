import React from 'react';
import { Item } from './Item';

export const ItemList=({productos})=>{
return(
    <div className='container'>
        {productos.map((unProducto)=> <Item key={unProducto.id} nombre={unProducto.nombre} precio={unProducto.precio} img={unProducto.img}/>)}
    </div>
)
}

export default ItemList;