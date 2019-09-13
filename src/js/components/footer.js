import React from "react";
import Grid from "@material-ui/core/Grid";
import { H3, DevIcon } from "../shared/shared_components";

function Contact() {
  return (
    <div style={{ paddingTop: "120px" }}>
      <Grid
        container
        spacing={3}
        style={{ paddingTop: "80px", marginBottom: "80px" }}
      >
        <Grid item xs={12}>
          <H3>contact</H3>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "left" }}>
          <p>Thanks for checking out my website!</p>
          <p>
            I had a lot of fun developing this quick and simple website and I
            hope you know more about me now than you did before.
          </p>
          <p>
            Feel free to reach out to me on the different social media
            platforms!
          </p>
        </Grid>
        <Grid item xs={12}>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.twitter.com/keithcheung41"
          >
            <DevIcon className="devicon-twitter-plain colored" />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/keithcheung41"
          >
            <DevIcon className="devicon-facebook-plain colored" />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
