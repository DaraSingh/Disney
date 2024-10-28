import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
function Slider() {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [movieList, setMovieList] = useState([]);
  const elementRef=useRef()
  const screenWidth=window.innerWidth;
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideo.then((resp) => {
      console.log(resp.data.results.backdrop_path);
      setMovieList(resp.data.results);
    });
  };
  const sliderRight=(elementRef)=>{
    elementRef.scrollLeft+=screenWidth-110
  }
  const sliderLeft=(elementRef)=>{
    elementRef.scrollLeft-=screenWidth-110
  }
  return (
    <div>
      <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer" onClick={()=>sliderLeft(elementRef.current)} />
      <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer right-0" onClick={()=>sliderRight(elementRef.current)}/>

      <div className="scrollbar-hide flex overflow-x-auto w-full px-16 py-4 scroll-smooth" ref={elementRef}>
        {movieList.map((item) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className=" min-w-full md:h-[510px] object-cover object-left-top mr-5 rounded-lg hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
