import {BrowserRouter, Routes, Route} from 'react-router-dom'
import react from "react";
import './App.css'; 
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from './ItemDetailContainer'

const App = () => {
  return (
    <BrowserRouter>
    <div>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}  />
        <Route path='/productos' element={<ItemListContainer/> } />
        <Route path='/detalles/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

