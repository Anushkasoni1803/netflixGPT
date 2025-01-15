import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils.js/constants";
import { addAiringTodayTv } from "../utils.js/moviesSlice";

const useAiringTodayTv = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const airingTodayTv = useSelector(
    (store) => store.movies.airingTodayTv
  );

  const getAiringTodayTv = async () => {
    const data = await fetch(
   "https://api.themoviedb.org/3/tv/airing_today", API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAiringTodayTv(json.results));
  };

  useEffect(() => {
    !airingTodayTv && getAiringTodayTv();
  }, []);
};

export default useAiringTodayTv;