export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id) => {
  console.groupCollapsed("%cmovieActions.js: deleteMovie()", "color: yellow");
  console.log(`id: ${id}`);
  console.groupEnd("movieActions.js: deleteMovie");

  return {
    type: DELETE_MOVIE,
    payload: Number(id),
  };
};

export const addMovie = (movie) => {
  console.groupCollapsed("%cmovieActions.js: addMovie()", "color: yellow");
  console.log("%cNew movie:", "color: yellow");
  console.table(movie);
  console.groupEnd("movieActions.js: addMovie");

  return {
    type: ADD_MOVIE,
    payload: movie,
  };
};
