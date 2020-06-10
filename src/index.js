import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";
//inline creation of component

function Inline() {
  return <p>This is local component</p>;
}
//rendering components
ReactDOM.render(
  <div>
    <Heading />
    <List />
    <Inline />
  </div>,
  document.getElementById("root")
);
