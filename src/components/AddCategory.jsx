import React, { useState } from 'react';
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    // Función para manejar el cambio en el input
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    // Función para manejar el envío del formulario
    const onSubmit = (event) => {
        event.preventDefault(); // Evitar el comportamiento por defecto del formulario
        const inputValueTrimmed = inputValue.trim();
        if (inputValueTrimmed.length <= 1) return; // Evitar agregar categorías vacías o de un solo carácter
        onNewCategory(inputValueTrimmed); // Llamar a la función para agregar la nueva categoría
        setInputValue(''); // Limpiar el input después de enviar
    };
    return (
        <form  onSubmit={(event) => onSubmit(event)}>
             <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={handleInputChange}
                />
        </form>
       
            
    );
}