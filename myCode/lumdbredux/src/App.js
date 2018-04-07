/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from "react";
//React-Router
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';
//Extra styking
import logo from "./logo.svg";
import "./App.css";

//Import components for movies

import MoviesList from "./MoviesList";
import MovieDetail from "./MovieDetail";
import Toggle from "./components/Toggle";
//import root reducers
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/root_reducers";

//END IMPORTS

//MIDDLEWARE
const MIDDLEWARE = [logger, thunk];
//Create store
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...MIDDLEWARE))
);
console.log("State", store.getState);
//APP COMPONENT
const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Toggle />
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
