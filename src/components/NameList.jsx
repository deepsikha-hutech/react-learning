import React from "react";
import Person from "./Person";

function NameList() {
  const NameList = ["Bruce", "Clark", "Diana"];
  const persons = [];

  // const nameList = NameList.map((name, index) => (
  //   <h2 key={index}>
  //     {index} {name}
  //   </h2>
  // ));
  return (
    <>
      {NameList.map((name, index) => (
        <h2 key={index}>
          <div>
            {<Person person={{ name: name, age: index }} age={index} />}
          </div>
        </h2>
      ))}
    </>
  );
}

export default NameList;
