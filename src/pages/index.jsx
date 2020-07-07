import React from "react";

import { PageHead } from "../components/PageHead/PageHead.component.jsx";
import { Navbar } from "../components/Navbar.component.jsx";
import { Intro } from "../components/Intro/Intro.component.jsx";
// import { BlogPreview } from "../components/Blog/BlogPreview.component.jsx";
// import { Projects } from "../components/Projects/Projects.component.jsx";
// import { About } from "../components/About/About.component.jsx";
// import { Contact } from "../components/Contact/Contact.component.jsx";

import { Grommet } from "grommet";

import "./app.styles.css";

const lightTheme = {
  global: {
    font: {
      family: "Roboto",
    },
    colors: {
      brand: "#18314f",
      background: "#E6FAFC",
      "accent-1": "#D84727",
      "accent-2" : "",
      "accent-3" : "",
      "accent-4" : "",
      focus: "dark-6",
      text: {
        dark: "brand",
      },
    },
  },
};

const IndexPage = () => {
  return (
    <Grommet theme={lightTheme}>
      <PageHead />
      <Navbar />
      <Intro />
    </Grommet>
  );
};

export default IndexPage;
