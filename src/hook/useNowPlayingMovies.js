// import { useEffect } from "react";
// import { API_OPTIONS } from "../utils.js/constants";
// import { addNowPlayingMovies } from "../utils.js/moviesSlice";
// import { useDispatch } from "react-redux";

// const useNowPlayingMovies = () => {
//   // Fetch Data from TMDB API and update store
//   const dispatch = useDispatch();


//   const getNowPlayingMovies = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/now_playing?page=1",
//       API_OPTIONS
//     );
//     const json = await data.json();
//     dispatch(addNowPlayingMovies(json.results));
//   };

//   useEffect(() => {
//     getNowPlayingMovies();
//   }, []);
// };

// export default useNowPlayingMovies;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils.js/constants";
import { addNowPlayingMovies } from "../utils.js/moviesSlice";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
   "https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;