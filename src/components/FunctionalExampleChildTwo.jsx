import React, { useEffect } from "react";

function FunctionalExampleChildTwo() {
  useEffect(() => {
    return () => {
      console.log("child-2  removing now........");
    };
  }, []);

  return <div>FunctionalExampleChild-2</div>;
}

export default FunctionalExampleChildTwo;
