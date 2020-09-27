import React from "react";
import Profile from "./profile";
import Bio from "./profile/Bio";
import Skill from "./profile/Skill";
import Test from "./propsTest/Test";

class App extends React.Component {
  render() {
    return (
      <div className="AppName">
        <Profile />
        <Test name="Turjo" age="25" />
        <Bio name='Anis' title='Student'/>
        <Skill skillA='VueJs' skillB='Angular' skillC='Micro'/>
      </div>
    );
  }
}
export default App;
