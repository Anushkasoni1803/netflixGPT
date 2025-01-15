import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils.js/constants";
import { addPopularMovies } from "../utils.js/moviesSlice";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const popularmovies = useSelector(
    (store) => store.movies.popularmovies
  );

  const getpopularmovies = async () => {
    const data = await fetch(
   "https://api.themoviedb.org/3/movie/popular", API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularmovies && getpopularmovies();
  }, []);
};

export default usePopularMovies;