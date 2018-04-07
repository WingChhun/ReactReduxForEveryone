import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//mimport action creator
import { toggleMessage } from "./actions";

//Connect store to Toggle
const Toggle = ({ messageVisibility, toggleMessage }) => {
  return (
    <div>
      {messageVisibility && (
        <p>You will be seeing this if Redux actino is toggled!</p>
      )}
      <button onClick={toggleMessage}>Toggle Me!</button>
    </div>
  );
};

//Pluck what we want from our state
const mapStateToProps = state => ({
  messageVisibility: state.messageVisibility
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMessage
    },
    dispatch
  );
//handle component and redux together using connect
//Connect Toggle to our ReduxStore
export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
