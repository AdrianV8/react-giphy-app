import { useState } from "react";


export const AddCategory = ( {onNewCategory} ) =>{ // Obtenemos las props que queremos del useState de GifExpertApp

    /**
     * inputValue -> Valor del campo input
     * setInputValue -> Estabelecer un valor al campo
     * useState -> Vacío para añadir solamente el valor de inputValue
     */
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) =>{
        // console.log(target.value);
        setInputValue(target.value)
    }

    /**
     * 
     * @param {*} event 
     * @return {*}      Nueva categoria añadida al html
     */
    const onSubmit = (event) =>{
        event.preventDefault();
        const newInputValue = inputValue.trim();
        newInputValue.length >= 1 ? onNewCategory( newInputValue ) : null; // Añadimos la categoria
        setInputValue(''); // Dejamos vacio el campo al pulsar `Enter`

        
    }

    return(
        <form onSubmit={ onSubmit } >
            <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={onInputChange}
            />
        </form>
        
    )
}

export default AddCategory;

