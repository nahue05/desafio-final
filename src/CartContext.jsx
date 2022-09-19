import React, { useState, useContext } from "react";
import Productos from "./data";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    
    const addItem = (item, cantidad) =>{
        if(isInCart(item.id)){
            setCart(cart.map(Productos=>{
                return Productos.id === item.id ? {...Productos, cantidad: Productos.cantidad + cantidad} : Productos
            }));
        }else{
            setCart([...cart, {...item, cantidad}])
        }
    }
    console.log(cart)

    const clear = () => setCart([]);

    const isInCart = (id)=> cart.find(Productos => Productos.id === id) ? true : false;

    const removeItem = (id) => setCart(cart.filter(Produtos => Productos.id !== id));

    return(
        <CartContext.Provider value={{
            clear,
            isInCart,
            removeItem,
            addItem,
        }}>

        {children}
        </CartContext.Provider>
            

        
    )


}