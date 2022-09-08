import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import Productos from './data'
import './App.css'; 
const ItemDetailContainer = () => {

    const [data, setData] = useState([])
    
    
    useEffect(()=>{
        const getProduct =  new Promise((resolve, reject) => {
            setTimeout(() => resolve(Productos.find(unProducto => unProducto.id ===4)),2000)
        })

        
        getProduct.then(res =>  setData(res))
        
        
        .catch(err => console.log(err))
}, [])



    return (
    <>
        
        <ItemDetail data={data} />
    </>
    );
    
    }
export default ItemDetailContainer;