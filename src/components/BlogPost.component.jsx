import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Grommet, Box, Heading } from "grommet";
import SEO from "../components/seo";
import { Navbar } from "../components/Navbar.component.jsx";
import { Footer } from "../components/Footer.component.jsx";
import MaxWidth from "../components/common/MaxWidth";
import CustomMD from "../components/common/CustomMD";

import "../pages/app.styles.css";
import "../pages/prism.css";

const lightTheme = {
  global: {
    font: {
      family: "PT Sans",
    },
    colors: {
      brand: "#18314f",
      background: "#E6FAFC",
      "accent-1": "#e94a47",
      "accent-2": "",
      "accent-3": "",
      "accent-4": "",
      focus: "dark-6",
      text: {
        dark: "brand",
      },
    },
  },
};

const BlogPost = ({ data }) => {
  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node;

  return (
    <Grommet theme={lightTheme}>
      <SEO title={"| Blog"} />
      <Navbar />
      <Box pad={{ left: "1vw", right: "1vw" }}>
        <MaxWidth>
          <Box>
          <Box direction="row" style={{alignContent: "center"}}>
              <Img
                fixed={frontmatter.image.childImageSharp.fixed}
                style={{display: "block", marginLeft: "auto", marginRight: "auto", alignSelf: "center", alignContent: "center"}}
              />
          </Box>
            <Heading level={2} margin="small" alignSelf="center">
              {frontmatter.title}
            </Heading>
            <Heading level={5} alignSelf="center">
              {frontmatter.date}
            </Heading>
            <Box pad={{ left: "small", right: "small" }}>
              <CustomMD>{html}</CustomMD>
            </Box>
          </Box>
        </MaxWidth>
      </Box>
      <Footer />
    </Grommet>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($path: String!) {
    allMarkdownRemark(filter: { frontmatter: { path: { eq: $path } } }) {
      edges {
        node {
          html
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            image {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
