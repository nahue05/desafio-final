import { addDoc, collection } from 'firebase/firestore';
import db from './firebase';
import React from 'react';
import { useState } from 'react';
import { useCartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, getTotal, clear } = useCartContext();
    const [orderId, setOrderId] = useState();
    
    const [buyer, setBuyer] = useState({
        Nombre:'',
        Email:'',
        Telefono:''
    });

    const {Nombre, Email, Telefono} = buyer
    const navigate = useNavigate()
    const generateOrder = async(data) =>{
        try{
            const col = collection(db, "Orders")
            const order = await addDoc(col,data)
            setOrderId(order.id)
            clear()
        }catch (error){
            console.log(error);
        }
    }

    


    const handleInputChange = (e) =>{
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
        console.log(Nombre);
    }

    const handlesubmit = (e) =>{
        e.preventDefault()
        const items = cart.map(e=>{return {id:e.id, title:e.nombre, price:e.precio, quantity:e.cantidad}})
        const date = new Date()
        const total = getTotal()
        const data = {buyer, items, date, total}
        console.log('data', data);
        generateOrder(data)

    }

    const  handleClear = () =>{
        clear()
        navigate('/cart')
    }
    return (
        <>
            <h1>Finalizando compra</h1>
                <hr />
                {!orderId? (
                <div>
                <h4>completar datos:</h4>
                <form className='form' onSubmit={handlesubmit}>
                
                <br />
                <input type="text" name="Nombre" placeholder='Nombre' value={Nombre} onChange={handleInputChange} />
                <br />
                <br />
                <input type="text" name="Telefono" placeholder='Telefono' value={Telefono} onChange={handleInputChange} />
                <br />
                <br />
                <input type="text" name="Email" placeholder='Email' value={Email} onChange={handleInputChange} />
                <br />
                <br />
                <input type="submit" value='Finalizar compra' className='botonCart' />
                <button className='botonCart' onClick={handleClear}> Cancelar compra </button>
            </form></div>)
            : <h4>Su orden de compra es: {orderId}</h4>    
        } 

            
        </>  
    
        
    );
}

export default Checkout;
