import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export function useGifs ({ keyword } = { keyword: null}) {
const [gifs, setGifs] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
    setLoading(true);
    //recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        //guardamos la keyword en el localStorage
        if (keyword) localStorage.setItem('lastKeyword', keyword);
      });
  }, [keyword]);

  return {loading, gifs};
}