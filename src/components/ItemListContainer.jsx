import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

import './App.css'; 
import { useParams } from 'react-router-dom';
import { getDocs } from 'firebase/firestore';
import { collection, query, where } from 'firebase/firestore';
import db from './firebase';
const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const {categoria} = useParams ()

    const getData = async(variableCategoria) => {
        try{
            const document = variableCategoria  ? query(collection(db, "Productos"), where("categoria","==", variableCategoria))
                                                : collection(db, "Productos")
            const col = await getDocs(document) 
            const result = col.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
            setProductos(result)
        }
        catch (error){
            console.log(error)
        }

    }

    useEffect(() => {
        getData (categoria)
    }, [categoria]);



    return (
    <>
    {
        productos.length ? <ItemList productos={productos} /> : <h1>Cargando...</h1>
    }   
    </>
    );
    
    }
export default ItemListContainer;
