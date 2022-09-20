import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';
const CartWidget = () => {
    const {cart, getCantidad} = useCartContext()
    return cart.length > 0 ? (
        
            <Link to='/cart'>
            <ion-icon  size="large" name="basket"></ion-icon>
            <span className='cantidad'>{getCantidad()}</span>
            </Link>

    ) : (
        <></>
    )
}

export default CartWidget;
