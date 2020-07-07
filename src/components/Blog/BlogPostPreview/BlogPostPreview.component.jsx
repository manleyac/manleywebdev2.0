import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export const BlogPostPreview = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {fileAbsolutePath: {regex: "/blog/"}}
        limit: 3
      ) {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            path
          }
        }
      }
    }
  `)
  const { nodes: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      {posts.map(post => {
        return (
          <div className="blog-post-preview" key={post.id}>
            <h3 className="blogPostTitle">
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h3>
            <h5>{post.frontmatter.date}</h5>
          </div>
        )
      })}
    </div>
  )
}
