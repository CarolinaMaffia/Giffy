import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';

const popularGifs = ['Puella magi madoka magica', 'Your lie in april', 'Naruto', 'Full metal alchemist'];

const Home = () => {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();

    const { loading, gifs } = useGifs();

    const handleSubmit = e => {
        e.preventDefault();
        pushLocation(`/search/${keyword}`)
        console.log(keyword);
    }

    const handleChange = e => {
        setKeyword(e.target.value);
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                value={keyword} 
                onChange={handleChange}
                placeholder="Search a gif..."
            />
        </form>
        <h3>Últimas búsquedas</h3>
        <ListOfGifs gifs={gifs} />
        <h3>Los gifs más populares</h3>
        <ul>
            {popularGifs.map((popularGif) => {
                return (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>🌸 Gif de {popularGif}</Link>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default Home