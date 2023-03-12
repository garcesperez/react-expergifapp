import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategory } ) => {


    const [inputValue, setInputValue] = useState('');
    const handleonChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        if(inputValue.trim().length > 2){
            setCategory(cat => [inputValue, ...cat]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={inputValue}
                onChange={handleonChange}  
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}