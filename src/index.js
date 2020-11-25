import React, { useState } from "react";
import ReactDOM from "react-dom";
import ukraine from "@svg-maps/ukraine";
import { SVGMap } from "react-svg-map";
import ResultMap from "./ResultMap";
import "./index.css";

const App = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const onMauseOver = ({ target }) => {
    setHoveredId(target.ariaLabel);
    // console.log(hoveredId);
  };

  return (
    <div className="flex" title={hoveredId && `You hover on the ${hoveredId}`}>
      <div className="mapWight">
        <SVGMap map={ukraine} onLocationMouseOver={onMauseOver} />
      </div>
      <div className="hoveredWight">
        <h3>{hoveredId}</h3>
        <span>Партії що пройшли 5% поріг:....</span>
        <ResultMap hoveredId={hoveredId} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
