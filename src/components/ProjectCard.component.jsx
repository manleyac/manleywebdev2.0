import React from "react";
import { Box, Heading, Paragraph, Image, Markdown } from "grommet";
import Img from "gatsby-image";

//icon imports
import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

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
        <Image src={props.image} />
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
