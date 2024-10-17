import React, { useState, useEffect } from "react";
import FunctionalExampleChildOne from "./FunctionalExampleChildOne";
import FunctionalExampleChildTwo from "./FunctionalExampleChildTwo";

function FunctionalCoponentExample() {
  const [empInfo, setEmpInfo] = useState({ name: "John", age: 30 });
  const [stdInfo, setStdInfo] = useState({ name: "bob", mark: 70 });

  useEffect(() => {
    console.log("\nMounted succseefully----------------");
    return () => {
      console.log("Iam removing now........");
    };
  }, []);

  useEffect(() => {
    console.log("emp info changed succseefully----------------");
  }, [empInfo]);

  useEffect(() => {
    console.log("std info changed succseefully----------------");
  }, [stdInfo]);

  useEffect(() => {
    console.log("one of the state changed succseefully----------------");
  });

  return (
    <>
      {empInfo.age % 2 == 0 ? (
        <FunctionalExampleChildOne />
      ) : (
        <FunctionalExampleChildTwo />
      )}
      <div>{JSON.stringify(empInfo)}</div>
      <button
        onClick={() => setEmpInfo({ ...empInfo, age: empInfo.age + 1 })}
        style={{ border: "1px solid black", margin: "2rem" }}
      >
        change Emp Age state
      </button>

      <div>{JSON.stringify(stdInfo)}</div>
      <button
        onClick={() => setStdInfo({ ...stdInfo, mark: stdInfo.mark + 1 })}
        style={{ border: "1px solid black", marginTop: "2rem" }}
      >
        Change Student Marks
      </button>
    </>
  );
}

export default FunctionalCoponentExample;
