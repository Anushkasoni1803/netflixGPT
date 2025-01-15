


import React from "react";
import { IMG_CDN_URL } from "../utils.js/constants";
import { useNavigate } from "react-router-dom";
import usePlayMovie from "../hook/usePlayMovie";
const MovieCard = ({ posterpath, title, release_date, vote_average ,id }) => {

    const navigate = useNavigate();
    const playit = () => {
        navigate('/browse/play')        
    }
    usePlayMovie(id)



  return (
    <div className="relative w-60 p-5 group cursor-pointer ">
      {/* Movie Poster */}
      <img
        src={IMG_CDN_URL + posterpath}
        alt="movie poster"
        className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-110 "
      />

      <div className="absolute top-0 left-0 w-full h-full group-hover:bg-gradient-to-tl from-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="">
        <h3 className=" text-white font-bold text-lg ">{title}</h3>

        {release_date? <p className=" font-bold text-sm text-white"> Release Date: {release_date} </p> : null }
        { vote_average? <p className=" mb-2 text-sm font-bold text-white">Rating: {id} {vote_average}</p> : null }
        </div>

        <div className="flex items-center justify-center">
          <button onClick={playit} className="flex items-center  bg-white font-bold text-black pe-3 rounded-lg ps-1 py-1  hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="red"
              viewBox="0 0 16 16"
            >
              <path d="M10.804 8.697 6.418 11.29c-.483.3-.949-.04-.949-.697V5.407c0-.656.466-.997.95-.697l4.385 2.593c.483.3.483 1.094 0 1.394z" />
            </svg>
            <span>Play</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
