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
            During my most recent internship at HubSpot, I was on the customer
            relations manager’s communicator team. Our team was is in charge of.
            We played a huge role in the interactions that help build a customer
            base for companies to grow better.
          </p>
          <p>
            During my previous internship at HubSpot, I was on the subscriptions
            team where I worked on different ways to drive improvements in email
            marketing for our customers, (in light of GDPR) and provided
            different for our customers to gain insights on their email
            campaign.
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
