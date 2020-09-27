import React from "react";

const Skill = (props) => {
  return (
    <div className="skills">
      <h3 className="skill">Skills:</h3>
      <ul>
        <li>{props.skillA}</li>
        <li>{props.skillB}</li>
        <li>{props.skillC}</li>
      </ul>
    </div>
  );
};

export default Skill;
