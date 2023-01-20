import React from 'react';
import { Link } from 'wouter';
import Gif from '../Gif/Gif';
import './ListOfGifs.css';

const ListOfGifs = ({ gifs }) => {
    
  return (
    <section>
      <Link to={'/'} className="home-link">Home</Link>
      <div className='list-of-gifs-container'>
        {
            gifs.map(singleGif => <Gif title={singleGif.title} url={singleGif.url} id={singleGif.id} key={singleGif.id} />)
        }
    </div>
    </section>
  )
}

export default ListOfGifs;