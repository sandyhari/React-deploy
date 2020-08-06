import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Heading } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import { Textarea, IconButton, Link } from "@chakra-ui/core";
import "../ComponentStyles/ContactStyles.css";
import {
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiGithub,
  FiLinkedin
} from "react-icons/fi";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

const Contact = () => {
  return (
    <section id="contact" className="p-3">
      <Heading size="lg" fontSize="30px">
        Get Socialize with me:
      </Heading>
      <hr className="rounded" />
      <div className="p-3" />
      <div className="jumbotron">
        <div className="p-2">
          <div className="p-2">
            <form>
              <Textarea placeholder="Want to share something...." />
              <br />
              <div className="p-1" />
              <Button leftIcon="email" variantColor="red" variant="solid">
                Email
              </Button>
            </form>
          </div>
          <hr />
          <div className="p-2">
            <div className="flex-container">
              <div>
                <Link href="https://github.com/sandyhari" isExternal>
                  <IconButton
                    variant="outline"
                    variantColor="red"
                    aria-label="Call Segun"
                    size="lg"
                    icon={FiGithub}
                  />
                </Link>
              </div>
              <div>
                <Link href="https://twitter.com/haris3801" isExternal>
                  <IconButton
                    variant="outline"
                    variantColor="red"
                    aria-label="Call Segun"
                    size="lg"
                    icon={FiTwitter}
                  />
                </Link>
              </div>
              <div>
                <Link href="https://www.facebook.com/sandy.hari2/" isExternal>
                  <IconButton
                    variant="outline"
                    variantColor="red"
                    aria-label="Call Segun"
                    size="lg"
                    icon={FiFacebook}
                  />
                </Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/sandyhari333/" isExternal>
                  <IconButton
                    variant="outline"
                    variantColor="red"
                    aria-label="Call Segun"
                    size="lg"
                    icon={FiInstagram}
                  />
                </Link>
              </div>
              <div>
                <Link href="https://www.linkedin.com/feed/" isExternal>
                  <IconButton
                    variant="outline"
                    variantColor="red"
                    aria-label="Call Segun"
                    size="lg"
                    icon={FiLinkedin}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
