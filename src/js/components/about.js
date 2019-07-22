import React from "react";
import Grid from "@material-ui/core/Grid";
import { H3, Spacer } from "../shared/shared_components";
import styled from "styled-components";

export const Me = styled.img`
  height: 35%;
  padding-top: 20%;
`;

function About() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <H3>about me</H3>
        </Grid>
        <Grid item xs={5}>
          <Me src={process.env.PUBLIC_URL + "/me.jpg"} alt="me" />
        </Grid>
        <Grid item xs={7} style={{ textAlign: "start" }}>
          <Spacer />
          <p>Hey there!</p>
          <p>
            Welcome to my own personal space in the huge space of the internet.
          </p>
          <p>
            I’m currently a third year student studying Computer Science at the
            University of Waterloo. Some areas of interest to me are software
            engineering, human-computer interaction, and algorithm complexity.
          </p>
          <p>
            During my free time, I like to sip coffee, read books, and pretend
            I’m a movie critique.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
