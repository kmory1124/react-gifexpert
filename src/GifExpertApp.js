import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

//Contenido de la aplicacion general

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch'])
    // const handleAdd = ()=>{
    //     setCategories(['Naruto',...categories]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* funcion que inserta nuevas categorias */}
            <AddCategory setCategories={setCategories} />  
            <hr/>
           
            <ol>
                {
                    categories.map( (category,idx) =>(
                        // funcion que muestra el resultado de los gift x categoria
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ol>
        </>
    )
}


