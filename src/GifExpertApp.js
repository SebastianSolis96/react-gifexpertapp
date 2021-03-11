import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['Terror', 'Acción', 'Comedia'] /* Esto se hace solo si nunca va a cambiar */
    const [categories, setCategories] = useState(['Terror']); /* Para tener algo dinámico */

    // const handleAdd = () => {
    //     // setCategories( ['Romance', ...categories] );
    //     setCategories( cats => [...cats, 'Romance'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>

            <ol>
                {
                    categories.map( category => ( /* Para recorrer el arreglo */
                        // return <li key={ category }> { category } </li> /* Cada hijo necesita un key único */
                        <GifGrid
                            key= { category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    );

}

export default GifExpertApp;