import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  
  return movies && (
    <div className='-mt-56 relative z-20 '>
      <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
      <MovieList title={'Popular '} movies={movies.popularmovies} />
      <MovieList title={'Top Rated '} movies={movies.topratedmovies} />
      <MovieList title={'Upcoming Movies '} movies={movies.upcomingmovies} />
      <MovieList title={'On The Air Tv Shows'} movies={movies.airingTodayTv} />
      <MovieList title={'Tv Shows Airing Today'} movies={movies.OntheairTv} />
      <MovieList title={'Top Rated Tv Shows'} movies={movies.topratedtv} />
      <MovieList title={'Popular Tv Shows'} movies={movies.populartv} />


    </div>
  )
}

export default SecondaryContainer