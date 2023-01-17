import { useState } from "react";

const apiKey = 'z8dIocQwdWmy4LYUN53Nt2WOseB994Iu&q';

export default function getGifs ({ keyword = 'overwatch' } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=25&offset=0&rating=g&lang=en`;  
  return fetch(apiURL)
    .then(data => data.json())
    .then(response => {
      const data = response.data // const {data} = response;
      if(Array.isArray(data)) {
        const gifs = data.map(image => {
          const {images, title, id} = image;
          const { url } = images.downsized_medium;
          // const images = image.images
          // const title = image.title
          // const id = image.id
          // const url = images.downsized_medium.url
          return { title, id, url }
        })
        return gifs
      }
    })
}
