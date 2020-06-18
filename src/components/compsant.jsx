import React, { Component } from "react";
class Compsant extends Component {
  /* state = {
    value: this.props.counter.value,
  }; //ici j'ai changé this.props.counter psk dans le componenent parent j'ai mis dans props le counter
  handelIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  On supprime the local state pour le pouvoir modifier ce component depuis son componentParent"
*/
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
    const { value } = this.props.counter; //ici on destrcut la valeur
    return value === 0 ? "Zero" : value;
  }
}
export default Compsant;
