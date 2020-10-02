import React from "react";

class Inputs extends React.Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthday: "",
    gender: "",
    agree: false,
  };
  handleEvent = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleCheckBox = (event) => {
    this.setState({
      agree: event.target.checked,
    });
  };
  render() {
    const { name, country, bio, birthday, agree } = this.state;
    return (
      <div>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="write your name"
          className="form-control my-2"
          onChange={this.handleEvent}
        />
        <select
          name="country"
          value={country}
          className="form-control my-2"
          onChange={this.handleEvent}
        >
          <option>select your country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Nepal">Nepal</option>
          <option value="Japan">Japan</option>
        </select>
        <textarea
          name="bio"
          value={bio}
          className="form-control my-2"
          onChange={this.handleEvent}
        ></textarea>
        <input
          type="date"
          name="birthday"
          value={birthday}
          className="form-control"
          onChange={this.handleEvent}
        />
        <div>
          <input
            className="ml-2"
            type="radio"
            name="gender"
            value="Male"
            onChange={this.handleEvent}
          />
          Male
          <input
            className="ml-2"
            type="radio"
            name="gender"
            value="Female"
            onChange={this.handleEvent}
          />
          Female
          <input
            className="ml-2"
            type="radio"
            name="gender"
            value="Other"
            onChange={this.handleEvent}
          />
          Other
        </div>
        <div>
          <input
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={this.handleCheckBox}
          />
           I agree all the terms and conditions.
        </div>
        <button
          className="my-2 btn-success"
          onClick={() => console.log(this.state)}
        >
          sent data
        </button>
      </div>
    );
  }
}

export default Inputs;
