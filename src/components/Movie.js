import React from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteMovie } from "../actions/movieActions";
import {
  addToFavorites,
  removeFromFavorites,
} from "../actions/favoritesActions";

const Movie = (props) => {
  const { id } = useParams();
  const { push } = useHistory();
  const movie = props.movies.find((movie) => movie.id === Number(id));

  const handleDeleteMovieClick = () => {
    // remove from favorites if it is in that array as well
    if (props.favorites.includes(movie)) {
      props.removeFromFavorites(id);
    }
    props.deleteMovie(id);
    push("/movies");
  };

  const handleAddFavoritesClick = () => {
    props.addToFavorites(movie);
  };

  return (
    <div className="modal-page col">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{movie.title} Details</h4>
          </div>
          <div className="modal-body">
            <div className="flexContainer">
              <section className="movie-details">
                <div>
                  <label>
                    Title: <strong>{movie.title}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Director: <strong>{movie.director}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Genre: <strong>{movie.genre}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Metascore: <strong>{movie.metascore}</strong>
                  </label>
                </div>
                <div>
                  <label>Description:</label>
                  <p>
                    <strong>{movie.description}</strong>
                  </p>
                </div>
              </section>

              <section>
                {props.displayFavorites && (
                  <span
                    className="m-2 btn btn-dark"
                    onClick={handleAddFavoritesClick}
                  >
                    Favorite
                  </span>
                )}
                <span className="delete">
                  <input
                    type="button"
                    className="m-2 btn btn-danger"
                    value="Delete"
                    onClick={handleDeleteMovieClick}
                  />
                </span>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer.movies,
    favorites: state.favoritesReducer.favorites,
    displayFavorites: state.favoritesReducer.displayFavorites,
  };
};

export default connect(mapStateToProps, {
  deleteMovie,
  addToFavorites,
  removeFromFavorites,
})(Movie);
