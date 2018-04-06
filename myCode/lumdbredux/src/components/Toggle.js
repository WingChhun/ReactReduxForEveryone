import React, { Component } from "react";
import { connect } from "react-redux";

//Connect store to Toggle
const Toggle = ({ messageVisibility, dispatch }) => {
  return (
    <div>
      {messageVisibility && (
        <p>You will be seeing this if Redux actino is toggled!</p>
      )}
      <button
        onClick={() =>
          dispatch({
            type: "TOGGLE_MESSAGE"
          })
        }
      >
        Toggle Me!
      </button>
    </div>
  );
};

//Pluck what we want from our state
const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

//handle component and redux together using connect
//Connect Toggle to our ReduxStore
export default connect(mapStateToProps)(Toggle);
