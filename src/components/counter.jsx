import React, { Component } from "react";

class Counter extends Component {
  //constructor() {
  //super();
  //this.handelIncrement = this.handelIncrement.bind(this);
  //}

  render() {
    return (
      <div>
        <span className={this.getBadgeClasess()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sn"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-outline-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasess() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
