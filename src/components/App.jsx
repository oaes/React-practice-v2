import React from "react";
class App extends React.Component {
  handlingEvent = (e) => {
    console.log('kiss me');
  };

  handleTextField = (e) => {
    console.log(e.target.value);
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
        />
      </div>
    );
  }
}
export default App;
