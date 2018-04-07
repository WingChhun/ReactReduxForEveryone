//IMPORT ACTION TYPE CONSTANTS
import { GET_MOVIES } from "../Movies/actions";

//initialState is the fallback state
const initialState = {
  movies: []
};

export default function(state = initialState, action) {
  //Pull action.type and action.data from action
  const { type, data } = action;
  switch (type) {
    case GET_MOVIES:
      return { ...state, movies: data };
    default:
      return state;
  }
}
