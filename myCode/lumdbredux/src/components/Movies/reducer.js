//IMPORT ACTION TYPE CONSTANTS
import { RESET_MOVIE, GET_MOVIES, GET_MOVIE } from "../Movies/actions";

//initialState is the fallback state
const initialState = {
  movies: [],
  movie: {},
  moviesLoaded: false,
  movieLoaded: false
};

export default function(state = initialState, action) {
  //Pull action.type and action.data from action
  const { type, data } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: data,
        moviesLoaded: true
      };

    case GET_MOVIE:
      return {
        ...state,
        movie: data,
        movieLoaded: true
      };
    //clear out all information reset movie case
    case RESET_MOVIE:
      return {
        ...state,
        movie: [],
        movieLoaded: false
      };
    default:
      return state;
  }
}
