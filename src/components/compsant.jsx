import React, { Component } from "react";
class Compsant extends Component {
  state = {
    value: this.props.counter.value,
  }; //ici j'ai changé this.props.counter psk dans le componenent parent j'ai mis dans props le counter
  handelIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasess()}>{this.formatCount()}</span>
        <button
          onClick={this.handelIncrement}
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}
export default Compsant;
