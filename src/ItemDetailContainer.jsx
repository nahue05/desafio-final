import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import Productos from './data'
import './App.css'; 
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import db  from './firebase';
const ItemDetailContainer = () => {

    const {id} = useParams()
    const [data, setData] = useState()
    
    const getSelectedData = async(idItem) =>{
        try{
            const document = doc(db, "Productos",idItem)
            const response = await getDoc(document)
            const result = {id: response.id, ...response.data()}
            setData(result)


        }catch (error){
            console.log(error);
        }
    }

    useEffect (() =>{
        getSelectedData(id)
    }, [id])

    return (
    <>
    {
        data ? <ItemDetail data={data} /> : <h1>Cargando...</h1>
    }
        
    </>
    );
    
    }
export default ItemDetailContainer;