
import { useEffect, useState } from "react";
import { fetchGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages]=useState([]);
    const [isLoading, setIsLoading]=useState(true);
    
    const getImages = async () => {
        const newImages = await fetchGifs(category);
        setImages(newImages);
        setIsLoading(false);
        }
    
    useEffect(() => {
        getImages();
    },[]);

  return {
    images:images,
    isLoading: isLoading,
  }
}
