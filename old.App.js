import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {}, "New Head"); //react element
const root = ReactDOM.createRoot(document.getElementById("root"));

//* two ways to write a functional component
const Headline = function () {
  return (
    <div>
      <h2>headline 1</h2>
    </div>
  );
};
const Headline2 = () => (
  <div>
    <h2 key="200">headline 2</h2>{" "}
    {/* key used to uniqely identify nested elements by react */}
  </div>
);

//root.render(heading); //to render a react element
// root.render(<Headline2 />); //to render a functional component

const title = //react element
  (
    <h3 key="23" id="title">
      react title element
    </h3>
  );
//to use a react element in react project

const Titleline = () => (
  <div>
    {title} {/* to render a react element */}
    <Headline /> {/*to render a functional component*/}
    {Headline()} {/*Alter way to  render fc*/}
    <Headline2></Headline2> {/*Another way to  render fc*/}
    <h2>titleline func component</h2>
  </div>
);
root.render(<Titleline />);
