
import react from "react"
import { Link } from "react-router-dom";
import './App.css';
import Buscador from "./Buscador"
import Navegacion from "./Navegacion";
import CartWidget from "./CartWidget";
const NavBar = () =>{
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <Link to='/' className="navbar-brand" href="#">Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <Navegacion/>
                <div className="bolsa">
                <CartWidget/>
                </div>
                <Buscador contBuscar="Ayuda"/>
            </div>
        </div>
        </nav>
    </>
    
    );
}

export default NavBar;




