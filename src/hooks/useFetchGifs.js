import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {

    const [images, setImagenes] = useState([]);
    const [isLoading, setisLoading] = useState(true) // Cuando empieza a cargar está en `true`

    const getImages = async() => {
        const newImages = await getGifs(categoria);
        setImagenes(newImages);
        setisLoading(false) // -> Terminar de cargar
    }



     // Este código sirve para que no se disparen las peticiones cada vez que se efectua un cambio.
    useEffect( () => {
        getImages();
    }, [ ] ) // Si se deja vacío solo se lanzará una vez el componente


    return{
        images,
        isLoading

    }
}
