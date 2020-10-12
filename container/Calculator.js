import React from "react";
import Display from "../components/Display";
import NumPad from "../components/NumPad";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      equation: "", //current equation
      input: "0", //the returned asnwer
      lastOperation: "", //the previous operation that can be overridden
      lastOutput: "" //the last output after equal sign
    };
    this.baseState = this.state;
    this.onClick = this.onClick.bind(this);
    this.onReset = this.onReset.bind(this);
    this.convertToAnswer = this.convertToAnswer.bind(this);
  }

  //this resets the Calculator
  onReset() {
    this.setState(this.baseState);
  }

  //onClick Function
  onClick(e) {
    const value = e.target.value; //button value
    const valueIsNum = !isNaN(Number(value)); //value is Number
    const isOperation = e.target.className.includes("operation"); //value is Operation
    const valueLast = this.state.lastOperation; //lastOperation
    const lastValueIsNum = !isNaN(Number(valueLast)); //last input is Number
    const currentEq = this.state.equation; //current Equation

    //if you have already input an equal sign
    //and that is not a NaN
    if (this.state.lastOutput !== "") {
      this.setState((prevState) => {
        return {
          equation: prevState.input,
          lastOutput: ""
        };
      });
    }

    //if value is an operation or a number
    if (value !== "AC" && value !== "ON" && value !== "=") {
      //if input is Zero
      //haven't finished solving the zero problem
      if (this.state.input === "0" && value === "0") {
        this.setState({ lastOperation: "0", equation: "0" });
        return;
      }

      //if input is Decimal
      if (value === "." && this.state.input.includes(".") === false) {
        return this.setState((prevState) => {
          return {
            input: prevState.input + value,
            equation: prevState.equation + value,
            lastOperation: value
          };
        });
      }

      //if input is a Number
      else if (valueIsNum === true) {
        return this.setState((prevState) => {
          return {
            input:
              prevState.input === "0" || isNaN(prevState.input)
                ? value
                : prevState.input + value,
            equation:
              prevState.input === "0" ? value : prevState.equation + value,
            lastOperation: value
          };
        });
      }

      //if input is an Operation(+,-,*,/)
      //if last value is an operation, current value is an operation, operation is not negative
      if (
        lastValueIsNum === false &&
        valueLast !== "." &&
        valueLast !== "=" &&
        isOperation === true &&
        value !== "-"
      ) {
        //if the last input is a negative, but there is already another operation before it, and the current input is another operation
        if (
          valueLast === "-" &&
          currentEq[currentEq.length - 2] !== "." &&
          isNaN(Number(currentEq[currentEq.length - 2]))
        ) {
          return this.setState((prevState) => {
            return {
              input: value,
              equation:
                prevState.equation.slice(0, prevState.equation.length - 2) +
                (value === "x" ? "*" : value),
              lastOperation: value === "x" ? "*" : value
            };
          });
          //finish logic here
        } else {
          return this.setState((prevState) => {
            return {
              input: value,
              equation:
                prevState.equation.slice(0, prevState.equation.length - 1) +
                (value === "x" ? "*" : value),
              lastOperation: value === "x" ? "*" : value
            };
          });
        }
      }

      //if input is Operation (typical condition)
      if (valueIsNum === false && value !== ".") {
        return this.setState((prevState) => {
          return {
            input: value,
            equation: prevState.equation + (value === "x" ? "*" : value),
            lastOperation: value === "x" ? "*" : value
          };
        });
      }

      //if value is Reset
    } else if (value === "AC") {
      this.onReset();
      //if input is equal sign
    } else if (value === "=") {
      if ((valueIsNum === false) & (lastValueIsNum === false)) {
        return;
      } else if (this.state.input === "0" && this.state.lastOperation === "") {
        return this.setState({
          input: "NaN",
          lastOperation: "="
        });
      } else if (this.state.input === "NaN") {
        return;
      } else {
        return this.convertToAnswer();
      }
    }
  }

  //returns the answer if the equal button is clicked
  convertToAnswer() {
    const eqStr = this.state.equation; //equation as str
    const newStr = eqStr
      .replace(/--/g, "+") //convert double negatives to plus
      .replace(/[^-\d/*+.]/g, "") //sanitize string for unwanted
      .replace(/[+/*-](?=$)/g, "")
      .replace(/(?=^)[+/*]/g, ""); //remove operations tagged at the end

    const result = eval(newStr).toString();

    this.setState({
      input: result,
      equation: newStr,
      lastOutput: result,
      lastOperation: "="
    });
  }

  //last step is to input result as the first item in this.state.equation

  render() {
    return (
      <div>
        <Display answer={this.state.input} equation={this.state.equation} />
        <NumPad onClick={this.onClick} onReset={this.onReset} />
      </div>
    );
  }
}

export default Calculator;

//I should keep the state and inputs here --- then find a way to break it out later.
