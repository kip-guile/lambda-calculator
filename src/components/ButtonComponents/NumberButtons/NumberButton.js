import React from "react";

const NumberButton = (props) => {
  const {value, screen} = props;

  return (value === '0' 
    ? <button className="roborobo">
      {value}
      </button>
    : <button className="button nums" onClick={evt => screen(value)}>
      {value}
    </button>
  );
};

export default NumberButton;