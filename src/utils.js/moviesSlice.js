import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularmovies: null,
        topratedmovies : null,
        OntheairTv : null,
        airingTodayTv : null,
        topratedtv : null,
        populartv : null,
        upcomingmovies : null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularmovies = action.payload;
        },
        addTopRatedMovies : (state, action) => {
            state.topratedmovies = action.payload;
        },
        addOntheairTv : (state, action) => {
            state.OntheairTv = action.payload;
        },
        addAiringTodayTv : (state, action) => {
            state.airingTodayTv = action.payload;
        },
        addTopRatedTv : (state, action) => {
            state.topratedtv = action.payload;
        },
        addPopularTv : (state, action) => {
            state.populartv = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingmovies = action.payload;
        },
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies , addTopRatedMovies, addOntheairTv,
    addAiringTodayTv, addTopRatedTv, addPopularTv , addUpcomingMovies , 
}  = moviesSlice.actions;
export default moviesSlice.reducer;