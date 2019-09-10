import React from "react";

const NumberButton = (props) => {
  return (
    <button className="button">
      {props.value}
    </button>
  );
};

export default NumberButton;