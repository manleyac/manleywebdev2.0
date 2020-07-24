import React from "react";
import { Link, graphql } from "gatsby";
import { Grommet, Box, Heading } from "grommet";
import SEO from "../components/seo";
import { Navbar } from "../components/Navbar.component.jsx";
import { Footer } from "../components/Footer.component.jsx";
import MaxWidth from "../components/common/MaxWidth";

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

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Grommet theme={lightTheme}>
      <Box>
        <SEO title="blog" />
        <Navbar />
        <Box height="96vh" margin={{ left: "1vw", right: "1vw" }}>
          <Heading level={2} color="background">
            hidden content
          </Heading>
          <MaxWidth>
            <Box alignSelf="center" direction="column" gap="medium" justify="center" width="large">
              {posts
                .filter((post) => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                  return (
                    <Link to={post.frontmatter.path}>
                      <Box
                        key={post.id}
                        background="white"
                        margin="medium"
                        round="small"
                        elevation="medium"
                      >
                        <Heading alignSelf="center" level={2} margin="small">
                          {post.frontmatter.title}
                        </Heading>
                        <Heading
                          alignSelf="center"
                          level={5}
                          margin={{ left: "2vw", top: "1vh" }}
                        >
                          {post.frontmatter.date}
                        </Heading>
                      </Box>
                    </Link>
                  );
                })}
            </Box>
          </MaxWidth>
        </Box>
        <Footer />
      </Box>
    </Grommet>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
