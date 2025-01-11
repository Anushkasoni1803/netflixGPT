import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils.js/constants';
import { useDispatch } from 'react-redux';
import { addnowPlayingMovies } from '../utils.js/moviesSlice';

const Browse = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json =await data.json();
    console.log(json.results)
    dispatch(addnowPlayingMovies(json.results))
  }

  useEffect(() =>{
    getNowPlayingMovies();
  },[])


  return (
    <Header/>
  )
}

export default Browse