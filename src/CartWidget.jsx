import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <>
            <Link to='/cart'>
            <ion-icon  size="large" name="basket"></ion-icon>
            </Link>
        </>
    );
}

export default CartWidget;
