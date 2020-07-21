import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Heading, Image } from "grommet";
import MaxWidth from "./common/MaxWidth";
import { ProjectCard } from "./ProjectCard.component";

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/project-files/" } }
      ) {
        edges {
          node {
            html
            frontmatter {
              deploy
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
  `);
  const projects = data.allMarkdownRemark.edges;
  const projectList = [];
  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    projectList.push({
      title: project.node.frontmatter.title,
      image: project.node.frontmatter.image,
      deploy: project.node.frontmatter.deploy,
      repo: project.node.frontmatter.repo,
      tags: project.node.frontmatter.tags,
      order: project.node.frontmatter.order,
      body: project.node.html,
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
    <Box>
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
