import React, {useState} from "react";
import {numbers} from "../../../data.js";
import NumberButton from "./NumberButton";

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div>
      {
       numberState.map(number =>
        <NumberButton value = {number}/>
       )
       }
    </div>
  );
};

export default Numbers;
