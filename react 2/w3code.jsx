import React, { Component } from "react";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
    this.style = {
      color: "red",
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
    this.style = {
      color: "blue",
    };
  };
  shoot = () => {
    alert("Great Shot!");
  };
  Goal = (n) => {
    alert(n);
  };
  render() {
    return (
      <div>
        <h1 style={this.style}>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
        {
          // Event
        }
        <h3>React Events below</h3>
        <button onClick={this.shoot}>Take the Shot!</button> <br />
        <br />
        {/* <button onClick={this.Goal("Goal!")}>Click me</button>
        <br /> */}
        <button onClick={(event) => this.shoot("Goal!", event)}>
          Take the shot!
        </button>
        {/* <Goal /> */}
      </div>
    );
  }
}
// function Goal(event) {
//   <p>this is event argument {event}</p>;
// }
export default Car;
