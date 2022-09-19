import {BrowserRouter, Routes, Route} from 'react-router-dom'
import react from "react";
import './App.css'; 
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from './ItemDetailContainer'
import { CartProvider } from './CartContext';
import CartView from './CartView';

const App = () => {
  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria/:categoria' element={<ItemListContainer/> } />
        <Route path='/detalles/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<CartView/>} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

