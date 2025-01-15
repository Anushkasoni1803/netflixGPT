import React from 'react'
import { useParams } from 'react-router-dom';
import Trailer from './Trailer';

const MyMovie = () => {

    const { id } = useParams(); // Extract `id` from the URL

  return (
    
    <div className='overflow-x-hidden'>
        <button className='bg-white  absolute justify-end align-top items-end'> 
        Back </button>
        <Trailer movieId={id} />
    </div>
  )
}

export default MyMovie