import React from "react";
class FormUncontrol extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {};
    data.name = event.target.name.value;
    data.email = event.target.email.value;
    data.password = event.target.password.value;
    console.log(data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="your name"
          />
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="enter your email"
          />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="enter your password"
          />
          <button
            className="form-control"
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default FormUncontrol;
