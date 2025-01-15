import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {
  return (
    <div className='mx-5'>
         <h1 className='text-white text-2xl px-5 font-bold font-mono my-5'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'>
            <div className='flex '>
                {movies?.map(  movie => <MovieCard key={movie.id} posterpath={movie.poster_path} title={movie.title} 
                 release_date = {movie.release_date} vote_average ={movie.vote_average} id={movie.id} /> )}
            </div>
        </div>
        
    </div>
  )
}

export default MovieList
