import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {


    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e)=>{
        setInputValue(e.target.value) //cambia el valor del input con el evento onchange del textbox
    }
    const handleSubmit = (e)=>{
        e.preventDefault(); //hace que el navegador no se refresque al hacer submit
        if(inputValue.trim().length>2){
            //inserta nuevas categorias
            setCategories(cats=>[inputValue,...cats])
            //setea en blanco el textbox luego de insertar una nueva categoria
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* muestra en el h1 el valor digitado en el input */}
            {/* <h1>{inputValue}</h1> */}
            {/* llama a los eventos onchange y refresca el value segun lo digitado */}
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </form>

      
    )
}

//Hace que la propiedad setCategories sea obligatorio de enviar cuando llamen a la funcion AddCategory
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}