import React, { Component } from "react";
import Compsant from "./compsant";

class CompParent extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handelDelete = (counterId) => {
    console.log("Handelelte event called", counterId);
    const counters = this.state.counters.filter((m) => m.id !== counterId);
    this.setState({ counters });
  };
  handelReste = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button onClick={this.handelReste} className="btn-sn primary m-2">
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Compsant
            key={counter.id}
            value={counter.value}
            onDelete={this.handelDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
export default CompParent;
