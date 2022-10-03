import {BrowserRouter, Routes, Route} from 'react-router-dom'
import react from "react";
import './components/App.css'; 
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './components/CartContext';
import CartView from './components/CartView';
import Checkout from './components/Checkout';

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
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

