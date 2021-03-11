import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])
    const { data: images, loading } = useFetchGifs( category );

    // useEffect( () => { /* Para que una parte de mi código se ejecute una sola vez 'con el [] vacío' */
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ]) /* Si la categoria cambia y ya no es [], se ejecuta este useEffect */


    return (
        <>
            <h3 className="animate__animated animate__bounce">{ category }</h3>
            
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            
            <div className="card-grid">
                {
                    images.map( img => ( /* Para recorrer el arreglo */
                        <GifGridItem 
                            key={ img.id }
                            { ...img } /* Para enviar todas las propiedades a otro componente y no escribir todas las propiedas en el otro componente */
                        />
                    ))
                }
            </div>
        </>
    )
}
