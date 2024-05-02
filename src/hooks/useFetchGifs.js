import { useState, useEffect } from 'react';
import { getGifts } from '../api/getGifts';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const gifs = await getGifts(category);
        setImages(gifs);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []); // Añade `category` a las dependencias si quieres que se actualice al cambiar

    return {
        images,
        isLoading
    };
};