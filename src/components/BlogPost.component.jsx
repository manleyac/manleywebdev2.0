import React from "react";
import { Link, graphql } from "gatsby";
import { Grommet, Box, Heading, Markdown, Header } from "grommet";
import SEO from "../components/seo";
import { Navbar } from "../components/Navbar.component.jsx";
import { Footer } from "../components/Footer.component.jsx";
import MaxWidth from "../components/common/MaxWidth";

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
  const { frontmatter, html } = data.markdownRemark;

  <Grommet theme={lightTheme}>
    <SEO />
    <Navbar />
    <Box height="93vh" margin={{ left: "1vw", right: "1vw" }}>
      <Heading level={2} color="background">
        hidden content
      </Heading>
      <MaxWidth>
        <Box>
          <Heading level={2}>{frontmatter.title}</Heading>
          <Heading level={5}>{frontmatter.date}</Heading>
          <Markdown>{html}</Markdown>
        </Box>
      </MaxWidth>
    </Box>
    <Footer />
  </Grommet>;
};

export default BlogPost;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image
      }
    }
  }
`;
