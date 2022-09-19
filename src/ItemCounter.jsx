import {useState} from 'react';
import './App.css';
import Productos from './data';
import Item from './Item';

const ItemCounter = ({maximo, onClick, id}) => {
    const [cantidad, setCantidad] = useState(1)

    function add(){
        if(cantidad < maximo){
            setCantidad(cantidad + 1)
        }
    }
    function substract(){
        if (cantidad > 1){
            setCantidad(cantidad - 1)
        }
        
    }
    function reset(){
        setCantidad(1)
    }

    

    return (
        <>
            <div className="counter-box">
            
            <p>cantidad: {cantidad}</p>

            <div>
                <button className="btn" onClick={substract}>-</button>
                <button className="btn" onClick={reset}>Reset</button>
                <button className="btn" onClick={add}>+</button>
            </div>
            <div>
            <button className="boton" onClick={()=> onClick(cantidad)}>Agregar a la bolsa</button>
            </div>
            </div>
        </>
    );
}

export default ItemCounter;
