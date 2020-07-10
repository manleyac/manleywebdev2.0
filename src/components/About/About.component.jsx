import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Heading, Image } from "grommet";
import MaxWidth from "./common/MaxWidth";


import builder from "../../images/builder.svg"


export const About = () => (
  <div name="about">
    <h1 >About</h1>
    <div className="aboutBody">
      <div className="aboutText">
        <p>
          The Modern Web can be difficult to navigate. Hire an experienced web
          developer who will understand your needs, and can guide you through an
          ever changing environment.
        </p>
      </div>
      <img src={builder} className="coderImg" />
    </div>
  </div>
)
