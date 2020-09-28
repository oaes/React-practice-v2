import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  intervalId = null;

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  startTimer = () => {
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert("timer finished");
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        });
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  resetTimer = () => {
    this.setState({ count: 0 });
    clearInterval(this.intervalId);
    this.intervalId = null;
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
        <div className="container">
          <button onClick={this.startTimer} className="btn">
            Start
          </button>
          <button onClick={this.stopTimer} className="btn">
            Stop
          </button>
          <button onClick={this.resetTimer} className="btn">
            Reset
          </button>
        </div>
      </div>
    );
  }
}
export default App;
