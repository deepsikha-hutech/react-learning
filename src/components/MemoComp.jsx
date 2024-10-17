import React from "react";

function MemoComp() {
  console.log("Rendering Memo Component");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
