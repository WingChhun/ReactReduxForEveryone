import {combineReducers} from 'redux';
import message from "./reducer";

//import reducers to this file and combine them all into one to export to main App component
const rootReducer = combineReducers({
message,

});


export default rootReducer;



