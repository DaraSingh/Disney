import React from 'react'

function MovieCard({movie}) {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <img src={IMAGE_BASE_URL + movie.poster_path} className='w-[110px] md:w-[220px] rounded-lg hover:border-[3px] border-gray-400 transition-all duration-150 ease-in-out cursor-pointer hover:scale-110'/>
    </>
  )
}

export default MovieCard
