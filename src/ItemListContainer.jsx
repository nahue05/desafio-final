import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import './App.css'; 
const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    
    useEffect(()=>{
        fetch('./data/data.json')
        .then(res => res.json())
        .then(data => setProductos(data.productos))
        .catch(err => console.log(err))
    }, [])



    return (
    <>
        
        <ItemList productos={productos} />
    </>
    );
    
    }
export default ItemListContainer;
