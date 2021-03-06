import React from "react";

import SEO from "../components/seo"
import { Navbar } from "../components/Navbar.component.jsx";
import { Intro } from "../components/Intro.component.jsx";
import BlogPreview from "../components/BlogPreview.component.jsx";
import { Projects } from "../components/Projects.component.jsx";
import { About } from "../components/About.component.jsx";
import { Contact } from "../components/Contact.component.jsx";
import { Footer } from "../components/Footer.component.jsx"; 
import { Grommet } from "grommet";

import "./app.styles.css";

const lightTheme = {
  global: {
    font: {
      family: "PT Sans",
    },
    colors: {
      brand: "#18314f",
      background: "#EDFCFD",
      "accent-1": "#e94a47",
      "accent-2" : "#585A5F",
      "accent-3" : "",
      "accent-4" : "",
      focus: "dark-6",
      text: {
        dark: "brand",
      },
    },
  },
};

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const IndexPage = () => {
  return (
    <Grommet theme={lightTheme}>
      <SEO title="Manley Web Dev"/>
      <Navbar />
      <Intro />
      <BlogPreview />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </Grommet>
  );
};

export default IndexPage;
