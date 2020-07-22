import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Heading } from "grommet";
import MaxWidth from "./common/MaxWidth";
import { ProjectCard } from "./ProjectCard.component";

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        edges {
          node {
            id
            childMarkdownRemark {
              html
              frontmatter {
                deploy
                order
                repo
                tags
                title
                featuredImage {
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
    }
  `);
  const projects = data.allFile.edges;
  const projectList = [];
  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    projectList.push({
      title: project.node.childMarkdownRemark.frontmatter.title,
      image:
        project.node.childMarkdownRemark.frontmatter.featuredImage
          .childImageSharp.fluid,
      deploy: project.node.childMarkdownRemark.frontmatter.deploy,
      repo: project.node.childMarkdownRemark.frontmatter.repo,
      tags: project.node.childMarkdownRemark.frontmatter.tags,
      order: project.node.childMarkdownRemark.frontmatter.order,
      body: project.node.childMarkdownRemark.html,
    });
  }
  const compare = (a, b) => {
    let comparison = 0;
    if (a.order > b.order) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return comparison;
  };
  projectList.sort(compare);
  return (
    <Box id="projects">
      <MaxWidth>
        <Box margin={{ left: "1vw", right: "1vw" }}>
          <Heading level={2} color="accent-1" alignSelf="center">
            Projects
          </Heading>
          <Box direction="row" gap="medium" wrap={true} justify="center">
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
              );
            })}
          </Box>
        </Box>
      </MaxWidth>
    </Box>
  );
};
