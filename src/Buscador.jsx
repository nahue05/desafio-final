import React from 'react';

const Buscador = () => {
    return (
        <div>
            <form className="d-flex">
                <input className="form-control me-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    );
}

export default Buscador;
