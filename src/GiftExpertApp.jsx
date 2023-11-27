import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        //Filtrar las categorias que ya existan
        if( categories.includes(newCategory) ) return;

        //...Copia el arreglo en una nueva zona de memoria
        setCategories([newCategory, ...categories]);

        // setCategories(cat => ([...cat, 'Rick y Morty']));
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ onAddCategory }    
            />

            {/* Listado de items/categorias (gifts) */}
            {
                categories.map(category => {
                    return(
                        <GifGrid 
                        key={category}
                        category={category}/>
                    )
                })
            }
        </>
    )
}
