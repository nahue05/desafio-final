import  React, { useContext, useState, useEffect } from "react";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartView =() =>{
    const {cart, removeItem } = useCartContext()

    return(
        <div>
            {
                cart.map((Productos) => (
                    <div   className="cartContainer">
                        <span className="spanCart">{Productos.nombre}</span>

                    </div>
                ))
            }
        </div>
    )

}


export default CartView