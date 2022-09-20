import  React, { useContext, useState, useEffect } from "react";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartView =() =>{
    const {cart, removeItem, getTotal } = useCartContext()

    return cart.length > 0 ? (
            <div>
                {cart.map((Productos) => (
                    
                    <div key={Productos.id}  className="cartContainer">
                        <p className="tituloCart">{Productos.nombre}</p>
                        <img src={Productos.img} className='imgCart' />
                        <p className="precioCart">cantidad: {Productos.cantidad}</p>
                        <p className="precioCart">Precio:${Productos.precio*Productos.cantidad}</p>
                        <button className="botonCart" onClick={()=> removeItem(Productos.id)}>Eliminar del carrito</button>
                    </div>
                    
                    
                ))
            }
            <div>
                <h4 className="precioCart">Precio Total:$ {getTotal()} </h4>
                <button className="botonCart">Confirmar compras</button>            
            </div>
            </div>
    ) : (
<div>
    <div className="cartContainer">
        <h1 className="tituloCart">No hay productos en el carrito</h1>
        <Link to="/">
            <button className="botonCart">
                Ver Productos
            </button>
        </Link>
    </div>
</div>
);
            
    }   
    




export default CartView