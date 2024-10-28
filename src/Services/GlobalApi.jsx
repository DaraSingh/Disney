import axios from "axios"

const movieBaseUrl='https://api.themoviedb.org/3'
const api_key='cd8ca3eb0d1829353e7c466b48448980'
const movieByGenreBaseUrl="https://api.themoviedb.org/3/discover/movie?api_key=cd8ca3eb0d1829353e7c466b48448980"

const getTrendingVideo=axios.get(movieBaseUrl + '/trending/all/day?api_key='+api_key)
const getMovieByGenereId=(id)=>axios.get(movieByGenreBaseUrl+"&with_genres="+id)

export default {getTrendingVideo,getMovieByGenereId}