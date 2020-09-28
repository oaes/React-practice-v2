import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="AppName">
        <h4>Simple Timer</h4>
        <div className="container">
          <button className="btn" onClick={this.decrementCount}>
            -
          </button>
          <span>{this.state.count}</span>
          <button className="btn" onClick={this.incrementCount}>
            +
          </button>
        </div>
      </div>
    );
  }
}
export default App;
