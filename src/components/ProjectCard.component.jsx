import React from "react";
import { Box, Heading, Paragraph, Image, Markdown } from "grommet";

//icon imports
import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = (props) => {
  return (
    <Box id={props.order} width="medium" background="white" elevation="medium" round="small" margin="small" pad="small">
      <Box>
        <Image />
      </Box>
      <Box>
        <Heading level={3} alignSelf="center">{props.title}</Heading>
        <Markdown>{props.body}</Markdown>
        <Paragraph>Tech: {props.tags.join(", ")}</Paragraph>
        <Box direction="row" gap="xsmall" justify="end">
          <a target="_blank" href={props.repo}>
            <FaGithub size={25} color={"#3da9fc"} />
          </a>
          <a target="_blank" href={props.deploy}>
            <IoIosGlobe size={25} color={"#3da9fc"} />
          </a>
        </Box>
      </Box>
    </Box>
  );
};
