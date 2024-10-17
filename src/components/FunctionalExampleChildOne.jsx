import React, { useEffect } from "react";

function FunctionalExampleChildOne() {
  useEffect(() => {
    return () => {
      console.log("child-1 removing now........");
    };
  }, []);

  return <div>FunctionalExampleChild-1</div>;
}

export default FunctionalExampleChildOne;
