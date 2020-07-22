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
      margin="small"
      pad="small"
    >
      <Box>
        <Heading level={3} alignSelf="center" margin="xsmall">
          {props.title}
        </Heading>
        <Box alignSelf="center" alignContent="center">
          <Img fluid={props.image}/>
          <Markdown margin="xsmall">{props.body}</Markdown>
          <Paragraph margin="xsmall">Tech: {props.tags.join(", ")}</Paragraph>
        </Box>
        <Box direction="row" gap="xsmall" justify="end">
          <a target="_blank" href={props.repo} rel="noreferrer">
            <Github size="medium" color={"#3da9fc"} />
          </a>
          <a target="_blank" href={props.deploy} rel="noreferrer">
            <Language size="medium" color={"#3da9fc"} />
          </a>
        </Box>
      </Box>
    </Box>
  );
};
