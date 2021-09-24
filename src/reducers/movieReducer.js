import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "./../data.js";

export const initialState = {
  movies: movies,
  appTitle: "IMDB Murvee Database",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => item.id !== action.payload),
      };
    case ADD_MOVIE:
      const newMovie = { ...action.payload, id: Date.now() };
      return {
        ...state,
        movies: [...state.movies, newMovie],
      };
    default:
      return state;
  }
};

export default movieReducer;
