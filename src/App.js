import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  Decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        App
        <button onClick={this.increment} className="counter">
          +
        </button>
        <button onClick={this.Decrement} className="counter">
          -
        </button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default App;
