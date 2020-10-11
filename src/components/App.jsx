import React from "react";
import FormUnconrol from "./Form/FormUncontrolled";

class App extends React.Component {
  render() {
    return (
      <div className="AppName">
        <h4 style={{ color: "Green", fontSize: "30px", fontWeight: "900" }}>
          Uncontrolled Form
        </h4>
        <FormUnconrol />
      </div>
    );
  }
}
export default App;
