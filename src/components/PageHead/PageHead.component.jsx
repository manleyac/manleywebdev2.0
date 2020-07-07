import React from "react"
import { Helmet } from "react-helmet"
import favicon16 from "../../favicon_io-1/favicon-16x16.png";
import favicon32 from "../../favicon_io-1/favicon-32x32.png"

export const PageHead = () => (
  <Helmet>
    <title>MANLEY WEB DEV</title>

    <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
    <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />

    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans|Proza+Libre&display=swap"
      rel="stylesheet"
    ></link>
  </Helmet>
)
