const span = React.createElement(
  "span",
  { style: { backgroundColor: "green" } },
  "span tag "
);

const heading = React.createElement(
  "h1", // Type of element
  { style: { backgroundColor: "red" } }, // props
  `Hello world i'm Siddharth ` // Children
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
