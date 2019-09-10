import React from "react";

const NumberButton = (props) => {
  return (props.value === '0' 
    ? <button className="roborobo">
      {props.value}
      </button>
    : <button className="button nums">
      {props.value}
    </button>
  );
};

export default NumberButton;