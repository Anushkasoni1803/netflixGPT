import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils.js/constants";
import { addOntheairTv } from "../utils.js/moviesSlice";

const useOntheairTv = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const OntheairTv = useSelector(
    (store) => store.movies.OntheairTv
  );

  const getOntheairTv = async () => {
    const data = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air" , API_OPTIONS
    );
    const json = await data.json();
    dispatch(addOntheairTv(json.results));
  };

  useEffect(() => {
    !OntheairTv && getOntheairTv();
  }, []);
};

export default useOntheairTv;