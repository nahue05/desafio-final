import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import Productos from './data'
import './App.css'; 
import { useParams } from 'react-router-dom';
const ItemDetailContainer = () => {

    const {id} = useParams()
    

    const [data, setData] = useState([])
    
    useEffect(()=>{
        const getProduct =  new Promise((resolve, reject) => {
            setTimeout(() => resolve(Productos.find(unProducto => unProducto.id === Number(id))),1000)
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