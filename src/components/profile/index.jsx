import React from "react";
import Bio from "./Bio";
import "./profile.style.css";
import Skill from "./Skill";
import SocialLink from "./SocialLink";

class Profile extends React.Component {
  me ={
    name:'akash',
    title:'junior SE',
    skillA:'javascript',
    skillB:'ReactJs',
    skillC:'Nodejs'
  }

  render() {
    
    return (
      <div className="container">
        <Bio name={this.me.name} title={this.me.title}/>
        <Skill skillA={this.me.skillA} skillB={this.me.skillB} skillC={this.me.skillC}/>
        <SocialLink />
      </div>
    );
  }
}

export default Profile;
