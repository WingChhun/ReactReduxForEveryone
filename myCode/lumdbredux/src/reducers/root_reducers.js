import { combineReducers } from "redux";
import toggle from "../components/Toggle/reducer";
import movies from "../components/Movies/reducer";

//import reducers to this file and combine them all into one to export to main App component    m
const rootReducer = combineReducers({
  toggle,
  movies
});

export default rootReducer;
