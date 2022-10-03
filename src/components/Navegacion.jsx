import React from 'react';
import { Link } from 'react-router-dom';

const Navegacion = () => {
    return (
        <>
            <ul className="navbar-nav me-auto">
                <Link to='/categoria/bebidas' className="nav-link" href="#">
                <li className="nav-item">Bebidas</li>
                </Link>
                <Link to='/categoria/menu' className="nav-link" href="#">
                <li className="nav-item">Menú</li>
                </Link>
                <Link to='/categoria/acompañamientos' className="nav-link" href="#">
                <li className="nav-item">Acompañamientos</li>
                </Link>
                </ul>
        </>
    );
}

export default Navegacion;
