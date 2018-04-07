//IMPORT ACTION TYPE CONSTANTS
import { TOGGLE_MESSAGE, GET_MOVIES } from "../actions/actions";

//initialState is the fallback state
const initialState = {
  messageVisibility: false,
  movies: []
};

export default function(state = initialState, action) {
  //Pull action.type and action.data from action
  const { type, data } = action;
  switch (type) {
    case TOGGLE_MESSAGE:
      return {
        ...state,
        messageVisibility: !state.messageVisibility
      };
    case GET_MOVIES:
      return { ...state, movies: data };
    default:
      return state;
  }
}
