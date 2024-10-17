import React from "react";
import { useState } from "react";

function HooksStateFunctionalComponent() {
  const [count, setcount] = useState(0);
  const increaseCount = () => {
    setnumber(number + 1);
  };
  const decreaseCount = () => {
    setnumber(number - 1);
  };
  return (
    <div className=" IncreaseCount">
      {count}
      <button onClick={decreaseCount}> - </button>
      <button onClick={increaseCount}> + </button>
    </div>
  );
}

export default HooksStateFunctionalComponent;
