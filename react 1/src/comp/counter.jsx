import React, { Component } from "react";

class Counter extends Component {
  state = {
    Value: this.props.value,
    // tags: ["tag1", "tag2", "tag3", "tag4"],
  };
  style = {
    fontSize: 15,
    fontWeight: "bold",
  };
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ Value: this.state.Value + 1 });
  };
  render() {
    return (
      <>
        {this.props.children}
        <span style={this.style} className={this.getBgclasses()}>
          {this.formatValue()}
        </span>

        <button
          onClick={() => this.handleIncrement({ product: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Incerement
        </button>
        <br />
        {/* <ul>
          {" "}
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}{" "}
        </ul> */}
      </>
    );
  }
  getBgclasses() {
    const { Value } = this.state;
    let classes = "badge m-2 bg-";
    classes += Value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { Value } = this.state;
    return Value === 0 ? "Zero" : Value;
  }
}

export default Counter;
