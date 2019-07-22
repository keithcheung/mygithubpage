import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  H3,
  RestrictedImage,
  Spacer,
  DevIcon
} from "../shared/shared_components";

function Experience() {
  return (
    <div>
      <Grid container spacing={3} style={{ marginBottom: "20px" }}>
        <Grid item xs={12}>
          <H3>experience</H3>
        </Grid>
        <Grid item xs={7} style={{ textAlign: "start" }}>
          <Spacer />
          <p>
            I’m currently interning at HubSpot where I’m on the customer
            relations manager’s communicator team. Our product is in charge of
            120,000 daily interactions for our customers and plays a huge role
            in helping their businesses grow.
          </p>
          <p>
            During my previous internship at HubSpot, I was on the subscriptions
            team where I worked on different ways to improve the email marketing
            experience, (in light of GDPR) and provided different ways to gain
            insights for our customers.
          </p>
          <p>
            My first internship was at SMART Technogies where I worked on making
            their popular desktop application SMART Desktop into a web-based
            application which is now known as Smart Learning Suite Online.
          </p>
        </Grid>
        <Grid item xs={5}>
          <img
            src={process.env.PUBLIC_URL + "/hubspot.svg"}
            alt="hubspot-logo"
            style={{ marginTop: "100px" }}
          />
          <RestrictedImage
            src={process.env.PUBLIC_URL + "/smart.png"}
            alt="smart tech logo"
            style={{ marginTop: "50px" }}
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "left" }}>
          <p>
            During my time internships as well as experimenting with different
            projects helped me gain extensive experience in many frameworks and
            tools:
          </p>
        </Grid>
        <Grid item xs={12}>
          <DevIcon className="devicon-git-plain colored" />
          <DevIcon className="devicon-mocha-plain colored" />
          <DevIcon className="devicon-react-original colored" />
          <DevIcon className="devicon-sass-original colored" />
          <DevIcon className="devicon-jasmine-plain-wordmark colored" />
          <DevIcon className="devicon-vuejs-plain-wordmark colored" />
          <DevIcon className="devicon-java-plain colored" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Experience;
