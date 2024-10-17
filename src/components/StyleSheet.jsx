import React from "react";
import "./myStyles.css";

function StyleSheet(props) {
  let classname = props.primary ? "primary" : "";
  return (
    <div>
      <h1 classname={`${classname} font-xl`}>Stylesheets</h1>
    </div>
  );
}

export default StyleSheet;
