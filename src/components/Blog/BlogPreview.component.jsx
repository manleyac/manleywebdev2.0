import React from "react"

import { Link } from "gatsby"
import { BlogPostPreview } from "./BlogPostPreview/BlogPostPreview.component.jsx"

import "./Blog.styles.css";

export const BlogPreview = () => (
  <div>
    <h1>Blog</h1>
    <div className="blogBody">
      <p className="blogIntroP">Check out posts I write now and then about interesting topics.</p>
      <BlogPostPreview />
      <Link to="blog">
        <h4>See All</h4>
      </Link>
    </div>
  </div>
)
