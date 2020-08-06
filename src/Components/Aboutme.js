import React from "react";
import { Heading } from "@chakra-ui/core";
import "../ComponentStyles/AboutStyles.css";

const Aboutme = () => {
  return (
    <section id="about" className="p-3">
      <Heading size="lg" fontSize="30px">
        About me :
      </Heading>
      <hr className="rounded" />
      <div className="p-3" />
      <div className="jumbotron">
        <article className="m-2" style={{ fontFamily: "Archivo Black" }}>
          Yeah I am a Full Stack web developer currently working in Tata
          Consultancy Services as Application Developer. <br />
          I'm an enthusiastic person I belive in <strong>dynamic</strong> world
          which shows it has Life.I love travelling and its a yearly routine.
          <strong>C</strong>oding and problem solving blazed into my life
          cutting over other thrilling priorities. VideoGamer and Cricket Lover.
        </article>
      </div>
    </section>
  );
};

export default Aboutme;
