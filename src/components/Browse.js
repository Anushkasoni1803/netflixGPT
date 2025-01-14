import React from 'react'
import useNowPlayingMovies from '../hook/useNowPlayingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies();

  return (
    <div className='overflow-x-hidden  ' >
      <Header/>
    
      <MainContainer/>
      <SecondaryContainer/>
    </div>
    
  )
}

export default Browse