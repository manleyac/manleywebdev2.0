import React from "react";
import { Box, Heading, Paragraph, Markdown } from "grommet";
import Img from "gatsby-image";

//icon imports
import { Language } from "grommet-icons";
import { Github } from "grommet-icons";

export const ProjectCard = (props) => {
  return (
    <Box
      id={props.order}
      width="medium"
      background="white"
      elevation="medium"
      round="small"
      margin="medium"
      pad="small"
      fill={false}
      alignSelf="center"
    >
      <Box>
        <Box  style={{maxHeight: "220px"}} alignContent="center">
          <Img fluid={props.image} alt={props.title} />
        </Box>
        <Box>
          <Heading level={3} alignSelf="center" margin="xsmall">
            {props.title}
          </Heading>
          <Markdown margin="xsmall" color="accent-2">
            {props.body}
          </Markdown>
          <Paragraph margin="xsmall" color="accent-2">
            Tech: {props.tags.join(", ")}
          </Paragraph>
        </Box>
        <Box direction="row" gap="xsmall" justify="end">
          {props.repo && (
            <a target="_blank" href={props.repo} rel="noreferrer">
              <Github size="medium" color={"#3da9fc"} />
            </a>
          )}
          <a target="_blank" href={props.deploy} rel="noreferrer">
            <Language size="medium" color={"#3da9fc"} />
          </a>
        </Box>
      </Box>
    </Box>
  );
};
