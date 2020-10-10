import React from "react";
import FormUnconrolled from "./Form/FormUncontrolled";

class App extends React.Component {
  

  render() {
    return (
      <div className="AppName">
      <h4>Uncontrolled Form</h4>
        <FormUnconrolled/>
      </div>
    );
  }
}
export default App;
