import React from "react";
import ReactDOM from "react-dom/client";

const childOne = React.createElement(
  "h1",
  { id: "child1", key: "sss", style: { backgroundColor: "green" } },
  "Hello i'm child One"
);
const childTwo = React.createElement(
  "h1",
  { id: "child2", key: "hgsvhdsv", style: { backgroundColor: "blue" } },
  "Hello i'm child Two"
);

const parent = React.createElement(
  "div",
  {
    id: "parent",
    style: { backgroundColor: "red", width: "100px" },
  },
  ["'m parent", childOne, childTwo]
);
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(parent);
