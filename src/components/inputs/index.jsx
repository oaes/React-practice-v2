import React from "react";

class Inputs extends React.Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthday: "",
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="write your name"
          className="form-control my-2"
        />
        <select name="country" className="form-control my-2">
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Nepal">Nepal</option>
          <option value="Japan">Japan</option>
        </select>
        <textarea name="textarea" className="form-control my-2"></textarea>
        <input type="date" name="birthday" className='form-control'/>
      </div>
    );
  }
}

export default Inputs;
