import React from "react";
import "../ComponentStyles/IntroStyle.css";
import { Heading } from "@chakra-ui/core";
import picture from "../Images/IMG_4329.jpg";
import {
  GiCricketBat,
  GiFullMotorcycleHelmet,
  GiCarKey,
  GiDesk,
  GiJoystick
} from "react-icons/gi";

const Intro = props => {
  return (
    <section id="intro">
      <div className="jumbotron">
        <div className="dex">
          <div>
            <img src={picture} alt="avatar" />
          </div>
          <div>
            <Heading size="lg" fontSize="30px">
              Hi, this is <span>SriHari</span>
            </Heading>
            <h3>I'm a Full stack developer</h3>
            <div className="d-flex justify-content-around p-3">
              <GiCricketBat size="50px" />
              <GiFullMotorcycleHelmet size="50px" />
              <GiCarKey size="50px" />
              <GiDesk size="50px" />
              <GiJoystick size="50px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
