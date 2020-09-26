import React from "react";
import "./profile.style.css";

class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="bio">
          <h3 className='bioText'>Oaes kuruni</h3>
          <p>Front-End Software Engineer</p>
        </div>
        <div className="skills">
          <h3 className='skill'>Skills:</h3>
          <ul>
            <li>JavaScript</li>
            <li>React Js</li>
            <li>Node Js</li>
          </ul>
        </div>
        <div className="socialLinks">
          <h3 className='links'>Socials Link:</h3>
          <ul>
            <li>
              <a href="facebook.com">Facebook</a>
            </li>
            <li>
              <a href="linkedin.com">LinkedIn</a>
            </li>
            <li>
              <a href="youtube.com">YouTube</a>
            </li>
            <li>
              <a href="youtube.com">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
