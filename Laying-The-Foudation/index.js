import React from "react";
import ReactDOM from "react-dom/client";

// JSX / React Element
const SubHeading = <h2>Learning React!!!!🚀</h2>;

// Functional component
const App = () => {
  return (
    <div>
      <h1>Hello I'm React Component</h1>
      {SubHeading}
    </div>
  );
};

/*
3 ways to use Functional component:-
* App() 

Ideal ways-
* <App/>  
* <App></App> 

*/
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
