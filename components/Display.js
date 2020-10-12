import React from "react";
//import PropTypes from "prop-types";

//This is where the two lines of display are set

function Display(props) {
  return (
    <div className="main-display">
      <div id="input">{props.equation}</div>
      <div id="display">{props.answer}</div>
    </div>
  );
}

//Display.propTypes = { answer: PropTypes.number.isRequired };
//Display.propTypes = { equation: PropTypes.string.isRequired };

export default Display;
