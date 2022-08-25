import React from 'react';
import ItemCounter from './ItemCounter';

const ItemListContainer = ({greetings}) => {
    function onAdd (ItemCounter){
        console.log(`se han selecionado ${ItemCounter} elementos`)
    }
    return (
        <>  
        <ItemCounter stock={5} onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer;
