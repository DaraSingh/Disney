import React, { useEffect } from "react";
import GenresList from "../Constant/GenresList";
import GlobalApi from "../Services/GlobalApi";
import { useState } from "react";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useRef } from "react";
import HrMovieCard from "./HrMovieCard";
function MovieList({ genreId ,index_}) {
  useEffect(() => {
    getMovieByGenereId();
  }, []);
  const [movieList, setMovieList] = useState([]);
  const getMovieByGenereId = () => {
    GlobalApi.getMovieByGenereId(genreId).then((res) => {
    //   console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };
  const elementRef = useRef();
  const sliderRight = (elementRef) => {
    elementRef.scrollLeft += 500;
  };
  const sliderLeft = (elementRef) => {
    elementRef.scrollLeft -= 500;
  };
  return (
    <div >
      <HiChevronLeft
        className={`hidden md:block text-white text-[50px] absolute left-0 p-2 z-10   mx-8 ${index_%3==0?'mt-[70px]':'mt-[150px]'}  cursor-pointer`}
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className={`hidden md:block text-white text-[50px] absolute p-2 z-10 mx-8 ${index_%3==0?'mt-[70px]':'mt-[150px]'} cursor-pointer right-0`}
        onClick={() => sliderRight(elementRef.current)}
      />

      <div className="flex overflow-x-auto gap-8 scrollbar-hide pt-4 px-3 pb-4 scroll-smooth" ref={elementRef}>
        {movieList.map((item) => (
          // console.log({item})
          <>
          {index_%3==0 ? <HrMovieCard movie={item}/> :<MovieCard movie={item} />}
          </>
          
        ))}
      </div>
    </div>
  );
}

export default MovieList;
