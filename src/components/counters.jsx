import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handelIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handelReste = () => {
    // eslint-disable-next-line react/no-direct-mutation-state
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    // this.setState({ counters });
  };
  handelDelete = (counterId) => {
    console.log("Handelelte event called", counterId);
    const counters = this.state.counters.filter((m) => m.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button onClick={this.handelReste()} className="btn-sn primary m-2">
          Reset
        </button>

        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handelDelete}
            onIncrement={this.handelIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
