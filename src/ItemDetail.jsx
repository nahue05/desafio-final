import React,  { useState } from 'react';
import './App.css'; 
import ItemCounter from './ItemCounter'
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';
export const ItemDetails = ({data, cantidad})=>{
    const [show, setShow] = useState(false);

    const { addItem} = useCartContext ()

    const onAdd = (cantidad) =>{
        setShow(true)
        addItem(data,cantidad);
    }
    

    return(

<div key={data.id} className='detailContent'>
            <div className='cardDetail'>
                    <img src={data.img} className='imagenDetail'/>
                    <p className='parrafoDetail'>{data.nombre}</p>
                    <p className='parrafoDetail'>Precio: ${data.precio}</p>
                    
                    {show ? (<Link to="/cart" className="btn btnDetail btn-primary" type="button">
                Ver Bolsa
                </Link>
                ) : <ItemCounter maximo={data.maximo} id={data.id} cantidad={cantidad} onClick={onAdd} /> 
                }
                </div>
            </div>
        
    )
}
export default ItemDetails;