// import { useState, useEffect } from "react";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifItem 
                            key={img.id}
                            
                            //Esparce todas las propiedades de img en las props
                            { ...img } 
                        />
                    ))
                }
            </div>
        </>
    )
}
