import React, { Component } from "react";
import logo from "./logo.svg";
import { createStore } from "redux"; //take in reducers
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

const defaultState = {
  welcome: "Hi",
  otherState: "some stuff"
};

const greeting = (state = defaultState, action) => {
  switch (action.type) {
    case "GREET_ME":
      return { ...state, welcome: `Hello ${action.name}` };
    case "GREET_WORLD":
      return { ...state, welcome: "hello World" };
    default:
      return state;
  }
};

const store = createStore(greeting);
console.log("Before", store.getState());
const name = "James Chhun";
store.dispatch({
  type: "GREET_ME",
  name
});

//DEBUG
//console.log(store);
console.log("After", store.getState());
