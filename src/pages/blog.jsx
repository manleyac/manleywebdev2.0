import React from "react"

import { Link, graphql } from "gatsby"


import "./app.styles.css"

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="app footerBackground">
     
      
        <div className="blog-posts">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div className="blog-post-link" key={post.id}>
                  <h2>
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <h5>{post.frontmatter.date}</h5>
                </div>
              )
            })}
        </div>
    
    </div>
  )
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
`
