import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { ProjectCard } from "./ProjectCard.component.jsx"

import "./Projects.styles.css"

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/Projects/" } }) {
        edges {
          node {
            html
            frontmatter {
              deploy
              image
              path
              repo
              tags
              title
              order
            }
          }
        }
      }
    }
  `)
  const projects = data.allMarkdownRemark.edges
  const projectList = []
  for (let i = 0; i < projects.length; i++) {
    let project = projects[i]
    projectList.push({
      title: project.node.frontmatter.title,
      image: project.node.frontmatter.image,
      deploy: project.node.frontmatter.deploy,
      repo: project.node.frontmatter.repo,
      tags: project.node.frontmatter.tags,
      order: project.node.frontmatter.order,
      body: project.node.html,
    })
  }

  const compare = (a, b) => {
    let comparison = 0
    if (a.order > b.order) {
      comparison = 1
    } else {
      comparison = -1
    }
    return comparison
  }

  projectList.sort(compare)
  return (
    <div name="projects">
      <h1>Projects</h1>
      <div className="projects-collection">
        {projectList.map((project) => {
          return (
            <ProjectCard
              title={project.title}
              image={project.image}
              deploy={project.deploy}
              repo={project.repo}
              tags={project.tags}
              order={project.order}
              body={project.body}
            />
          )
        })}
      </div>
    </div>
  )
}
