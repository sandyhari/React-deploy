import React from "react";
import Intro from "./Intro";
import Aboutme from "./Aboutme";
import Skill from "./Projects";
import Contact from "./Contact";
import Poke from "./GithubPage";

const Main = props => {
  return (
    <div className="container">
      <Intro />
      <Aboutme />
      <Skill />
      <Poke />
      <Contact />
    </div>
  );
};

export default Main;
