import React, { useState, useEffect } from "react";
import { Heading, Icon, Link } from "@chakra-ui/core";
import "../ComponentStyles/PokeStyles.css";

const Poke = () => {
  const [user, setDetails] = useState({});
  const [repo, setRepo] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/sandyhari")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDetails(data);
      });
    fetch("https://api.github.com/users/sandyhari/repos")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRepo(data);
      });
  }, []);

  return (
    <>
      <section id="git" className="p-3">
        <Heading size="lg" fontSize="30px">
          Check out my GitHub Profile :
        </Heading>
        <hr className="rounded" />
        <div className="p-3" />
        <div className="jumbotron">
          <div className="sam">
            <Heading as="h4" size="md">
              Projects
            </Heading>
          </div>
          <div className="container1">
            {repo.map(eachrepo => {
              return (
                <div className="box">
                  <Icon name="chevron-right" size="32px" color="red.500" />
                  <Link href={eachrepo.html_url} isExternal>
                    <Heading as="h4" size="md">
                      {eachrepo.name}
                    </Heading>
                  </Link>
                  <br />
                  <p>"{eachrepo.description}"</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Poke;
