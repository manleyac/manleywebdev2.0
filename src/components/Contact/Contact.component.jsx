import React from "react"
import coder from "../../images/coder.svg"
import "./Contact.styles.css"

export const Contact = () => (
  <div name="contact">
    <h1>Contact Me</h1>
    <div className="contactBody">
      <form
        className="contactForm"
        method="POST"
        data-netlify="true"
      >
        <p>
          <label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input"
            />
          </label>
        </p>
        <p>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
            />
          </label>
        </p>
        <p>
          <label>
            <textarea
              name="message"
              placeholder="Message"
              className="input"
            ></textarea>
          </label>
        </p>
        <p>
          <button className="contactButton" type="submit">
            Send
          </button>
        </p>
      </form>
      <img className="contactImg" src={coder} viewBox="0 0 600 425" 
      preserveAspectRatio="xMidYMid"/>
    </div>
  </div>
)
