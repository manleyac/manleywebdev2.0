import React from "react"
import builder from "../../images/builder.svg"

import "./about.styles.css"

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
