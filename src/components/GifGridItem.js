import React from 'react'

export const GifGridItem = ( props ) => { /* Como en el componente padre de este puse { ...img } ya no tengo que recibir uno a uno las props sino puedo solo escribir la palabra */

    console.log(props)

    return (
        <div className="card animate__animated animate__bounce">
            <img src={ props.url } alt={ props.title } />
            <p>{ props.title }</p>
        </div>
    )
}
