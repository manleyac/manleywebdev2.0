import React, { useState } from "react"
import { Link } from "gatsby"
import { Navbar } from "../Navbar.component.jsx"

import "./Header.styles.css"

export const Header = () => {
  return (
    <div className="header">
      <Link id="logo" to="/">
        <span className="logoEdge">{`<`}</span>MANLEY WEB DEV
        <span className="logoEdge">{`/>`}</span>
      </Link>
      <Navbar />
    </div>
  )
}
