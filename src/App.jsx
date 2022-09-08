import react from "react";
import './App.css'; 
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from './ItemDetailContainer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/> 
      <ItemDetailContainer/>
    </div>
  );
}

export default App;

