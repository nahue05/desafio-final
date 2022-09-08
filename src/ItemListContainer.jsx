import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import Productos from './data'
import './App.css'; 
const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const getData = () => {
        return new Promise(res =>{
            setTimeout(() => {
                res(Productos)
            }, 1500);
        })
    }

    useEffect(() => {
        getData().then(dataProductos => setProductos(dataProductos))
    }, []);



    return (
    <>
        
        <ItemList productos={productos} />
    </>
    );
    
    }
export default ItemListContainer;
