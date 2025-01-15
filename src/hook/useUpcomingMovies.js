import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils.js/constants";
import {  addUpcomingMovies } from "../utils.js/moviesSlice";

const useUpcomingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const upcomingmovies = useSelector(
    (store) => store.movies.upcomingmovies
  );

  const getUpcomingMovies = async () => {
    const data = await fetch(
   "https://api.themoviedb.org/3/movie/upcoming", API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingmovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;