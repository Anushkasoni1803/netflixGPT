import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils.js/constants";
import { addTopRatedTv } from "../utils.js/moviesSlice";

const useTopRatedTv = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const topratedtv = useSelector(
    (store) => store.movies.topratedtv
  );

  const getTopRatedTv = async () => {
    const data = await fetch(
   "https://api.themoviedb.org/3/tv/top_rated", API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedTv(json.results));
  };

  useEffect(() => {
    !topratedtv && getTopRatedTv();
  }, []);
};

export default useTopRatedTv;