import React from "react"
import { graphql } from "gatsby"

import { HomePage } from "../../../../src/components/HomePage/HomePage.component.jsx"
import { PageHead } from "../../../../src/components/PageHead/PageHead.component.jsx"

import "../../../pages/app.styles.css"
import "./BlogPost.styles.css"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const isImage = () => {
    if (frontmatter.image) {
      const relativeImg = String(frontmatter.image.split("/").slice(-1))
      return (
        <img
          className="blog-post-img"
          src={require("../../../images/" + relativeImg)}
        />
      )
    } else {
      return <div></div>
    }
  }
  return (
    <div className="app footerBackground">
      <PageHead />
      <HomePage styleClass="blogPage">
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h4>{frontmatter.date}</h4>
            <div className="">{isImage()}</div>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </HomePage>
    </div>
  )
}
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
`
