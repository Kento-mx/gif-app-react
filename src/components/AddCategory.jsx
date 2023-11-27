import { useState } from 'react';

//Se desestructura el objeto props que tiene el nombre del prop que pusimos
export const AddCategory = ( { onNewCategory } ) => {
    
    const [inputValue, setInputValue] = useState('');

    //Funcion para captar los caracteres que el usuario escribe
    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        onNewCategory( inputValue );
        setInputValue('');
    }


    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar GIFTS"
                value={inputValue}
                onChange={ (event) => onInputChange(event)} />
        </form>
    )
}
