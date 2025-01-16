import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Trailer from './Trailer';

const MyMovie = () => {

    const navigate = useNavigate();
    const { id } = useParams(); // Extract `id` from the URL
    const backbtn =()=>{
      navigate('/browse')
    }

  return (
    
    <div className='overflow-x-hidden'>
        <button onClick={backbtn} className='bg-transparent border border-black hover:bg-gray-600 font-serif font-bold text-3xl p-3 m-5 absolute right-2 rounded-md text-white '> 
        Back </button>
        <Trailer movieId = { id } />
    </div>
  )
}

export default MyMovie