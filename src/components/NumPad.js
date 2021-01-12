import React from "react";
import Button from "./Button";
//This is where the buttons are composed as a grid

//this needs to be an object
const valueArr = [
  { id: "clear", value: "AC", className: "ac" },
  { id: "divide", value: "/", className: "operation" },
  { id: "seven", value: 7, className: "num" },
  { id: "eight", value: 8, className: "num" },
  { id: "nine", value: 9, className: "num" },
  { id: "multiply", value: "x", className: "operation" },
  { id: "four", value: 4, className: "num" },
  { id: "five", value: 5, className: "num" },
  { id: "six", value: 6, className: "num" },
  { id: "subtract", value: "-", className: "operation" },
  { id: "one", value: 1, className: "num" },
  { id: "two", value: 2, className: "num" },
  { id: "three", value: 3, className: "num" },
  { id: "add", value: "+", className: "operation add" },
  { id: "zero", value: 0, className: "num zero" },
  { id: "decimal", value: ".", className: "decimal" },
  { id: "equals", value: "=", className: "operation" }
];

//I can sort through different onClick functions at the onClick, rather than separate it here.
//like, if id = "clear", then setState

function NumPad(props) {
  const renderButtons = valueArr.map((item) => {
    return (
      <Button
        key={valueArr.indexOf(item)}
        id={item.id}
        className={item.className.concat(" btn ")}
        value={item.value}
        onClick={props.onClick}
      />
    );
  });
  return (
    //map objects in valueArr into Button
    //can reduce repeated items
    //consider putting valueArr in separate file
    //consider mapping the elements to the buttons
    <div className="num-pad-grid">{renderButtons}</div>
  );
}

export default NumPad;
