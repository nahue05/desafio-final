import react from "react";
import './App.css'; 
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemCounter from "./ItemCounter";

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/> 
      
    </div>
  );
}

export default App;

