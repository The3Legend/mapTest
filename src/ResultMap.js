import React from "react";
import arr from "./electionResult";

const Apps = ({ hoveredId }) => {
  let array = arr;
  let result = [];
  let createResult = (array) => {
    let counter = -1;
    array.forEach((el) => {
      if (el.Партія.includes("область")) {
        result.push([el.id]);

      }
    });
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].Партія.includes("область")) {
        counter += 1;
      }
      result[counter].push({
        Партія: array[i].Партія,
        Кількість: array[i].Кількість,
        style: array[i].style,
      });
    }
    result.forEach((el) => {
      el.splice(1, 1);
    });
    return result;
  };
  let nameAreas = createResult(array);
  const electionAreas = nameAreas.map((el) => {
    if (hoveredId === el[0]) {
      return (
        <ul className="list-group">
          <li className="list-group-item" style={el[1].style}>
            <div>{el[1].Партія}</div>
            <div>Кількість отриманих місць:{el[1].Кількість}</div>
          </li>
          <li className="list-group-item" style={el[2].style}>
            <div>{el[2].Партія}</div>
            <div>Кількість отриманих місць:{el[2].Кількість}</div>
          </li>
          <li className="list-group-item " style={el[3].style}>
            <div>{el[3].Партія}</div>
            <div>Кількість отриманих місць:{el[3].Кількість}</div>
          </li>
          <li className="list-group-item " style={el[4].style}>
            <div>{el[4].Партія}</div>
            <div>Кількість отриманих місць:{el[4].Кількість}</div>
          </li>
          <li className="list-group-item " style={el[5].style}>
            <div>{el[5].Партія}</div>
            <div>Кількість отриманих місць:{el[5].Кількість}</div>
          </li>
        </ul>
      );
    } else return null;
  });
  return <span>{electionAreas}</span>;
};

export default Apps;
