import React from 'react'

function HrMovieCard({movie}) {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <section className='transition-all duration-150 ease-in-out cursor-pointer hover:scale-110'>
    <img src={IMAGE_BASE_URL + movie.backdrop_path} className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400' />
    <h2 className='w-[110px] md:w-[260px] text-white mt-2 text-center' >{movie.title}</h2>
  </section>
  )
}

export default HrMovieCard
