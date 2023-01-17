import React, { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import Gif from './Gif';

const ListOfGifs = ({ params }) => {
    const { keyword } = params;
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        getGifs({ keyword })
          .then(gifs => {
            setGifs(gifs)
            setLoading(false)
          });
      }, [keyword]);

      if (loading) return <i>Cargando</i>

  return (
    <div>
        {
            gifs.map(singleGif => <Gif title={singleGif.title} url={singleGif.url} id={singleGif.id} key={singleGif.id} />)
        }
    </div>
  )
}

export default ListOfGifs;