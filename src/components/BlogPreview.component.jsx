import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Box, Heading, Image } from "grommet";
import MaxWidth from "./common/MaxWidth";


const BlogPreview = () => {
  const data = useStaticQuery(graphql`
  query BlogPreview {
    allFile(filter: {sourceInstanceName: {eq: "blog-posts"}}, limit: 3, sort: {fields: childMarkdownRemark___frontmatter___date, order: DESC}) {
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
        <Heading level={2} color="accent-1">
          Blog
        </Heading>
        <Box align="center">
          {posts.map((post) => {
            return (
              <Link to={post.node.childMarkdownRemark.frontmatter.path}>
                <Heading level={4} style={{textDecoration: "underline"}}>
                  {post.node.childMarkdownRemark.frontmatter.title}
                </Heading>
              </Link>
            );
          })}
        </Box>
      </MaxWidth>
    </Box>
  );
};

export default BlogPreview;
