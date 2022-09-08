import React from 'react';
import { Item } from './Item';

export const ItemDetail=({productos})=>{
return(
    <div>
        {productos.map((unProducto)=> <ItemDetail key={unProducto.id} nombre={unProducto.nombre} precio={unProducto.precio} img={unProducto.img} maximo={unProducto.maximo}/>)}
    </div>
)
}

export default ItemDetail;