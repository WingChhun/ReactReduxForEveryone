import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleMessage } from "./actions";
import { getMovies } from "../Movies/actions";
//Connect store to Toggle
const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => {
  return (
    <div>
      {messageVisibility && (
        <p>You will be seeing this if Redux actino is toggled!</p>
      )}
      <button onClick={toggleMessage}>Toggle Me!</button>
      <button onClick={getMovies}>Get Movies</button>
    </div>
  );
};

//Pluck what we want from our state
const mapStateToProps = state => ({
  messageVisibility: state.messageVisibility,
  movies: state.movies
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMessage,
      getMovies
    },
    dispatch
  );
//handle component and redux together using connect
//Connect Toggle to our ReduxStore
export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
