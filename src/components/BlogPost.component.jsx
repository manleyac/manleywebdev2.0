import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Grommet, Box, Heading, Markdown } from "grommet";
import SEO from "../components/seo";
import { Navbar } from "../components/Navbar.component.jsx";
import { Footer } from "../components/Footer.component.jsx";
import MaxWidth from "../components/common/MaxWidth";

import "../pages/app.styles.css";

const lightTheme = {
  global: {
    font: {
      family: "Roboto",
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
      <SEO title={"| Blog"}/>
      <Navbar />
      <Box  margin={{ left: "1vw", right: "1vw" }}>
        <Heading level={2} color="background">
          hidden content
        </Heading>
        <MaxWidth>
          <Box>
            <Img fluid={frontmatter.image.childImageSharp.fluid} style={{maxHeight: "600px"}}/>
            <Heading level={2} margin="small" alignSelf="center">
              {frontmatter.title}
            </Heading>
            <Heading level={5} alignSelf="center">
              {frontmatter.date}
            </Heading>
            <Box alignSelf="center"><Markdown alignSelf="center">{html}</Markdown></Box>
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
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
