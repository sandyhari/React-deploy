import React from "react";
import { Button, ButtonGroup, Heading } from "@chakra-ui/core";

const Skill = () => {
  return (
    <>
      <section id="skills" className="p-3">
        <div>
          <Heading size="lg" fontSize="30px">
            Skill Set :
          </Heading>
          <hr className="rounded" />
          <div className="p-3">
            <ButtonGroup spacing={4}>
              <Button variantColor="" variant="solid">
                FRONT END
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="red"
                variant="outline"
              >
                HTML
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="green"
                variant="outline"
              >
                CSS
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="blue"
                variant="outline"
              >
                JavaScript
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="pink"
                variant="outline"
              >
                React JS
              </Button>
            </ButtonGroup>
          </div>
          <div className="p-3">
            <ButtonGroup spacing={4}>
              <Button variantColor="" variant="solid">
                BACK END
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="red"
                variant="outline"
              >
                NODEJS
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="green"
                variant="outline"
              >
                PYTHON
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="blue"
                variant="outline"
              >
                C
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="pink"
                variant="outline"
              >
                C#
              </Button>
            </ButtonGroup>
          </div>
          <div className="p-3">
            <ButtonGroup spacing={4}>
              <Button variantColor="" variant="solid">
                DBMS
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="red"
                variant="outline"
              >
                MySQL
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="green"
                variant="outline"
              >
                MSSQL
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="blue"
                variant="outline"
              >
                PLSQL
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="pink"
                variant="outline"
              >
                MongoDB
              </Button>
            </ButtonGroup>
          </div>
          <div className="p-3">
            <ButtonGroup spacing={4}>
              <Button variantColor="" variant="solid">
                Other Skills
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="red"
                variant="outline"
              >
                TFS
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="green"
                variant="outline"
              >
                GIT - version control
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="blue"
                variant="outline"
              >
                Express framework
              </Button>
              <Button
                rightIcon="arrow-forward"
                variantColor="pink"
                variant="outline"
              >
                ASP.net framework
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
