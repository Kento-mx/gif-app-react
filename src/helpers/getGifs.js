
//Se aparta la funcion del componente para evitar ser renderizado varias veces
//Y se utiliza useEffect para corregir eso
const getRandomNum = ()=> {
    return Math.floor(Math.random() * 11);
}

export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=X9xbMrvh1zIKIUwRakCBjyVQAOv8sUvh&q=${category}&limit=10&offset=${getRandomNum()}`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    
    return gifs;
}