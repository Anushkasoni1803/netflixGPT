import React from 'react'
import useNowPlayingMovies from '../hook/useNowPlayingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hook/usePopularMovies';
import useTopRatedMovies from '../hook/useTopRatedMovies';
import useOntheairTv from '../hook/useOntheairTv';
import useAiringTodayTv from '../hook/useAiringTodayTv';
import useTopRatedTv from '../hook/useTopRatedTv';
import usePopularTv from '../hook/usePopularTv';
import useUpcomingMovies from '../hook/useUpcomingMovies';


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useOntheairTv();
  useAiringTodayTv();
  useTopRatedTv();
  usePopularTv();
  useUpcomingMovies();

  return (
    <div className=' overflow-hidden ' >
      <Header/>
      <MainContainer/>
      <div className=' bg-black'>
      <SecondaryContainer/>

      </div>
    </div>
    
  )
}

export default Browse