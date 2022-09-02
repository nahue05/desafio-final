import {useState} from 'react';
import './App.css';

const ItemCounter = ({maximo, onAdd}) => {
    const [ItemCounter, setItemCounter] = useState(1)

    function add(){
        if(ItemCounter < maximo){
            setItemCounter(ItemCounter + 1)
        }
    }
    function substract(){
        if (ItemCounter > 1){
            setItemCounter(ItemCounter - 1)
        }
        
    }
    function reset(){
        setItemCounter(1)
    }


    return (
        <>
            <div className="counter-box">
            
            <p>cantidad: {ItemCounter}</p>

            <div>
                <button className="btn" onClick={substract}>-</button>
                <button className="btn" onClick={reset}>Reset</button>
                <button className="btn" onClick={add}>+</button>
            </div>
            <div>
            <button className="btn" onClick={()=> onAdd(ItemCounter)}>Confirmar</button>
            </div>
            </div>
        </>
    );
}

export default ItemCounter;
