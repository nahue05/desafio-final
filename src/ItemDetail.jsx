import React from 'react';
import './App.css'; 
import ItemCounter from './ItemCounter'
export const ItemDetails = ({data})=>{
    function onAdd (ItemCounter){}
        
    

    return(

<div key={data.id} className='detailContent'>
            <div className='cardDetail'>
                    <img src={data.img} className='imagenDetail'/>
                    <p className='parrafoDetail'>{data.nombre}</p>
                    <p className='parrafoDetail'>Precio: ${data.precio}</p>
                    <ItemCounter maximo={data.maximo} onAdd={onAdd}/>
                    
            </div>
        </div>
    )
}
export default ItemDetails;