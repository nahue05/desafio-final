import {React, useState, useEffect} from 'react';
import './App.css';
import ItemCounter from './ItemCounter';

const Productos = () => {
    function onAdd (ItemCounter){
        console.log(`se han selecionado ${ItemCounter} elementos`)
    }
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        fetch('./json/productos.json')
        .then((response) => response.json())
        .then((data => {
            data = data.productos
            const productosJSX = data.map((item)=>
            <div key={item.id} className='cardContent'>
                
                    <div className='card'>
                        <img src={item.img} className='imagenCard'/>
                        <p className='tituloCard'>{item.nombre}</p>
                        <p className='precioCard'>Precio: ${item.precio}</p>
                        <p className='cantidadCard'>Maximo para comprar: {item.maximo}</p>
                        <ItemCounter maximo={item.maximo} onAdd={onAdd}/>
                    </div>
                
            </div>
            )
            setProductos(productosJSX)
        }))
        .catch((error)=>{
            console.error(error);
        })
    }, []);

    function consultarPromesa(confirmacion){
        return new Promise ((res, rej)=>{
            if(confirmacion){
                res(productos)
            }else{
                rej('reject')
            }
        })
    }

    
    return (
        <>
            {consultarPromesa(true) && productos}
        </>
    );
}


