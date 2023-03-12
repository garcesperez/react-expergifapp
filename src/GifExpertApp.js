import React, { useState } from 'react'
import { AddCategory } from './component/AddCategory';
import { GifGrid } from './component/GifGrid';


export const GifExpertApp = () => {

  
    const [array_categorias, setArray_categorias] = useState(["One Punch"]);

  /*  const handelCategory = ()=>{
        const c = "Nueva Categoria";
        let nuevo = [...category, c]; 
        setCategory (nuevo);

        Cuando no tengo acceso al arreglo category
        setCategory(cat => [...cat, inputValue]);
    }*/



    return (
        <div>
            <h1>GifExpertApp</h1>
            
            <AddCategory setCategory={ setArray_categorias } />
            <hr />

            <ol>{

            array_categorias.map(cat=> <GifGrid key={cat} category={cat} />)
                
                }
            </ol>

        </div>
    )
}
