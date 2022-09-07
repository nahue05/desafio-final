import React, { useEffect, useState } from 'react';
import productos from './productos.json';
import { itemList } from './itemList';

const itemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [productosFetch, setProductosFetch] = useState([])

    const getProductos = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
            productos.length > 0 ?
            resolve(productos)
            :
            reject("No hay datos")
        }, 500);
    })
}


    useEffect(() => {
        getProductos()
        .then(res => setProductos(res))
        .catch(err => console.log(err))
    }, [])

useEffect(() => {
fetch('./data/data.json')
.then(res => res.json())
.then(data => setProductosFetch(data))
.catch(err => console.log(err))
}, [])

    return (
    <>
        
        <itemList productos={productos} />
    </>
    );
    
    }
export default itemListContainer;
