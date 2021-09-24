import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  TOGGLE_FAVORITES,
} from "../actions/favoritesActions";

export const initialState = {
  favorites: [
    {
      id: 1,
      title: "Star Wars",
      director: "George Lucas",
      metascore: 92,
      genre: "Scifi",
      description:
        "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    },
  ],
  displayFavorites: false,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...new Set([...state.favorites, action.payload])],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
