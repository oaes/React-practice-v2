import React from "react";
import FormikForm from "./FormikForm/FormikForm";

class App extends React.Component {
  render() {
    return (
      <div className="AppName">
        <h4 style={{ color: "Green", fontSize: "30px", fontWeight: "900" }}>
          Formik Form
        </h4>
        <FormikForm />
      </div>
    );
  }
}
export default App;
