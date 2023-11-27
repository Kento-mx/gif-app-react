import { useState } from "react"

export const GifItem = ({url, title}) => {

    const [colorHandle, setColorHandle] = useState(false);

    const colorHandleOn = ()=> {
        setColorHandle(!colorHandle);
    }

    return (
        
        
        <div className="card" onClick={colorHandleOn}>
            <div className={
                colorHandle
                    ? "card-click"
                    : "card-sombra"
            }>
                <p>{ title }</p>
            </div>
            <img src={ url } alt={ title } />
        </div>
    )
}
