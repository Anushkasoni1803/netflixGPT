import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils.js/constants";
import { addPopularTv } from "../utils.js/moviesSlice";

const usePopularTv = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const populartv = useSelector(
    (store) => store.movies.populartv
  );

  const getPopularTv = async () => {
    const data = await fetch(
   "https://api.themoviedb.org/3/tv/popular", API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularTv(json.results));
  };

  useEffect(() => {
    !populartv && getPopularTv();
  }, []);
};

export default usePopularTv;