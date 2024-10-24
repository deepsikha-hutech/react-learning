import React from "react";
import { useState } from "react";

function IncreaseAge() {
  const [age, setAge] = useState(0);
  const increaseAge = () => {
    setAge(age + 1);
  };
  return (
    <div className=" IncreaseAge">
      {age}
      <button onClick={increaseAge}> Increase Age </button>
    </div>
  );
}

export default IncreaseAge;
