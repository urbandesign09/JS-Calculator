import React from "react";
import "./styles.css";
import Calculator from "../container/Calculator";
import Credit from "../container/Credit";

function App() {
  return (
    <div className="App">
      <Calculator />
      <Credit />
    </div>
  );
}

export default App;

//what is the state?
//The state is the answer
//display shows the operatiosn as a memory (string)
//do you also keep updating the operations?

//Hello World

//should I try React Hooks here????? useState
//clickable button for equal sign, id="equals"
//10 clickable elements, 0-9, with corresponding id's

//4 clickable elements, 4 operators, corresponding id's

//clickable element, decimal . , id"decimal"

//clickable element id="clear" this is the AC button

//display element, id "display"

//In any order, operate a chain of numbers, hit = the correct result should be shown

//when "." is clicked, it should append to current display value; two . are rejected
//is that a promise???
//if there is a "." in previous State, you cannot add any more "."
//if prevState has ".", then the operation stops

//you can perform operations on decimal numbers

//if two or more operations are entered consecutively, then only the "last" operator is used
//Is there a regex that prevents this?
//str becomes unstringed,becomes a normal operation

//Pressing an operator after "=" starts a new calulation that operates on the result
//of the previous evaluation
//maintains the previous state and operates on it

//Several decimal places of precision (at least 4 places)

//Choose calculator logic
//Immmediate Execution Logic or Formula/Expresion Logic

//if (value === "0" && this.state.lastOperation === "0") {
//  return;
//}

//what if multiple operation were hit consecutively, excluding negative sign
//if last Operation is an operation (+,-,*,/) and current value is an operation (+,*,/)
//equation removes the last Operation  and inputs the current input
//if the previous value is -, then you have to slice 2
//if (lastValueIsNum === false && valueLast !== "." && isOperation === true) {
//  return;
//}
