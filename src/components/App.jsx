import React from "react";
class App extends React.Component {
  state = {
    name: "",
  };
  handlingEvent = (e) => {
    console.log("kiss me");
  };

  handleTextField = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div className="AppName">
        <h4>Event Handling</h4>
        <button
          onClick={this.handlingEvent}
          type="button"
          className="btn btn-primary"
        >
          Love me
        </button>
        <br />
        <input
          onChange={this.handleTextField}
          type="text"
          placeholder="write something"
          className="textField"
          value={this.state.name}
        />
        {this.state.name && <h4>Welcome,{this.state.name}</h4>}
      </div>
    );
  }
}
export default App;
