import React, { useState, useContext } from "react";


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

    const removeItem = (id) => setCart(cart.filter(Productos => Productos.id !== id));

    const getTotal = () =>{
        let total = 0;
        cart.forEach((Productos) =>{
            total = total + (Productos.cantidad * Productos.precio)
    });
    return total;
    }

    const getCantidad = () =>{
        let cantidad = 0;
        cart.forEach((Productos) =>{
            cantidad += Productos.cantidad
    });
    return cantidad;
}

    return(
        <CartContext.Provider value={{
            clear,
            isInCart,
            removeItem,
            addItem,
            getTotal,
            getCantidad,
            cart,
        }}>

        {children}
        </CartContext.Provider>
            

        
    )


}