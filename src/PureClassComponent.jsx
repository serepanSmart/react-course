import React from "react";

class PureClassComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.state = { count: 0 };
  }

  increment() {
    this.setState((state) => ({
      count: ++state.count,
    }));
  }
  decrement() {
    this.setState((state) => ({
      count: --state.count,
    }));
  }

  render() {
    return (
      <>
        <h1>Count in PureComponent: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>==============================================</div>
      </>
    );
  }
}

export default PureClassComponent;
