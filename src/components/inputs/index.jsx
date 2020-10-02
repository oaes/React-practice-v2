import React from "react";

class Inputs extends React.Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthday: "",
  };
  handleEvent = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { name, country, bio, birthday } = this.state;
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
        <button className='my-2' onClick={()=> console.log(this.state)}>
            sent data
        </button>
      </div>
    );
  }
}

export default Inputs;
