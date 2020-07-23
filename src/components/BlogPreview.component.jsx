import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Box, Heading } from "grommet";
import MaxWidth from "./common/MaxWidth";

const BlogPreview = () => {
  const data = useStaticQuery(graphql`
    query BlogPreview {
      allFile(
        filter: { sourceInstanceName: { eq: "blog" } }
        limit: 3
        sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                title
                date(formatString: "MMM DD, YYYY")
                path
              }
            }
          }
        }
      }
    }
  `);

  const posts = data.allFile.edges;
  return (
    <Box pad="small">
      <MaxWidth>
        <Box margin={{ left: "1vw", right: "1vw" }}>
          <Heading level={2} color="accent-1" alignSelf="center">
            Blog
          </Heading>
          <Box
            alignSelf="center"
            direction="column"
            fill={true}
          >
            {posts.map((post) => {
              return (
                <Box
                  style={{
                    width: "100%",
                    minWidth: "275px",
                    maxWidth: "400px",
                  }}
                  margin="small"
                  background="white"
                  round="medium"
                  elevation="medium"
                  alignSelf="center"
                >
                  <Link
                    to={post.node.childMarkdownRemark.frontmatter.path}
                    key={post.node.childMarkdownRemark.frontmatter.path}
                  >
                    <Heading
                      level={4}
                      alignSelf="center"
                      style={{ textDecoration: "underline" }}
                    >
                      {post.node.childMarkdownRemark.frontmatter.title}
                    </Heading>
                  </Link>
                </Box>
              );
            })}

            <Box
              style={{ width: "100%", minWidth: "275px", maxWidth: "400px" }}
              margin="small"
              background="white"
              round="medium"
              elevation="medium"
              alignSelf="center"
            >
              <Link to="/blog">
                <Heading
                  level={4}
                  alignSelf="center"
                  style={{ textDecoration: "underline" }}
                >
                  See All
                </Heading>
              </Link>
            </Box>
          </Box>
        </Box>
      </MaxWidth>
    </Box>
  );
};

export default BlogPreview;
