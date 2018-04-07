//IMPORT ACTION TYPE CONSTANTS
import { TOGGLE_MESSAGE } from "./actions";

//initialState is the fallback state
const initialState = {
  messageVisibility: false
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

    default:
      return state;
  }
}
