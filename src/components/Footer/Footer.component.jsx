import React from "react"

import github from "./icons/github.svg"
import twitter from "./icons/twitter.svg"

import "./Footer.styles.css"

export const Footer = () => (
  <div className="footer">
    <div className="rights">
      <h4>Andrew Manley</h4>
      <span> © {new Date().getFullYear()}</span>
    </div>
    <div className="socialLinks">
      <a
        href="https://github.com/manleyac"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`follow me on github`}
      >
        <img width="30" src={github} alt="github" />
      </a>
      <a
        href="https://twitter.com/DevManley"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`follow me on twitter`}
      >
        <img width="30" src={twitter} alt="twitter" />
      </a>
    </div>
  </div>
)
