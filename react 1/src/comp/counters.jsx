import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 2 },
    ],
  };

  render() {
    return (
      <>
        {this.state.counters.map((counters) => (
          <Counter key={counters.id} value={counters.value}>
            <h6>Counter #{counters.id}</h6>
          </Counter>
        ))}
      </>
    );
  }
}

export default Counters;
