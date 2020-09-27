import React from "react";

const Bio = (props) => {
  return (
    <div className="bio">
      <h3 className="bioText">{props.name}</h3>
      <p>{props.title}</p>
    </div>
  );
};

export default Bio;
