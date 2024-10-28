import React from 'react'

function GifGrid({ categoria }) {

  const getGifts = async () => {
    const request = `https://api.giphy.com/v1/gifs/trending?api_key=EzftFitq5ysNJ3dmUYjtRLi5K08laQ5o&q=${categoria}&limit=20`;  
    const response = await fetch(request);
    const { data } = await response.json();

    console.log(data);
    const gifts = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
      }
    })

  }

  getGifts();

  return (
    <>
      <h3> {categoria} </h3>
    </>
  )
}

export default GifGrid