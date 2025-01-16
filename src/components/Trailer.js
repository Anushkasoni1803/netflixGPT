import React from 'react'
import {  useSelector } from 'react-redux'
// import useMovieTrailer from '../hook/useMovieTrailer'
import usePlayTrailer from '../hook/usePlayTrailer'

const Trailer = ({movieId}) => {
  const trailerVideo = useSelector((store)=> store.movies?.trailerVideo)

  usePlayTrailer(movieId);

  return (
    <div className="w-screen h-screen overflow-hidden -mt-2">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key 
          + "?&autoplay=1&mute=2"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default Trailer