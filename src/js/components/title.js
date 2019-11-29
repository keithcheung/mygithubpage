import React from "react";
import styled from "styled-components";
import { H3 } from "../shared/shared_components";

const primaryBlue = "#18324f";

const Link = styled.a`
  font-size: 3em;
  color: white;
  margin: 10px;
  &:visited {
    color: ${primaryBlue};
  }

  &:hover {
    color: ${primaryBlue};
  }
`;

function Title() {
  return (
    <div>
      <H3>Keith Cheung</H3>
      <p>
        CS Student at the University of Waterloo | Incoming UI Engineer Intern
        at LinkedIn | Previously at HubSpot (x2) and SMART Technologies
      </p>
      <hr />
      <div>
        <Link target="_blank" href="https://www.linkedin.com/in/keithcheung41/">
          <i className="fa fa-linkedin" />
        </Link>
        <Link target="_blank" href="https://github.com/keithcheung">
          <i className="fa fa-github" />
        </Link>
        <Link
          target="_blank"
          href="https://drive.google.com/open?id=1vVGLDHWjvoGIErZjAtaQ_JBGB87U0jD5"
        >
          <i className="fa fa-file" />
        </Link>
      </div>
      <div className="container">
        <div className="chevron" />
        <div className="chevron" />
        <div className="chevron" />
      </div>
    </div>
  );
}

export default Title;
