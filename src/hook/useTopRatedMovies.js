import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils.js/constants";
import { addTopRatedMovies } from "../utils.js/moviesSlice";

const useTopRatedMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const topratedmovies = useSelector(
    (store) => store.movies.topratedmovies
  );

  const getTopRatedMovies = async () => {
    const data = await fetch(
   "https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topratedmovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;