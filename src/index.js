import React from "react";
import ReactDOM from "react-dom";
import ukraine from "@svg-maps/ukraine";
import { SVGMap } from "react-svg-map";
// import "react-svg-map/lib/index.css";
import "./index.css";

const App = () => {
  const name = document.getElementsByTagName('path')
  console.log(name)
  return (
    <div>
      <SVGMap map={ukraine} />;

    </div>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
