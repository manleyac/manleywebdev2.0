import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Heading, Image, Paragraph } from "grommet";
import { Reactjs } from "grommet-icons";
import { Node } from "grommet-icons";
import { Gatsbyjs } from "grommet-icons";
import MaxWidth from "./common/MaxWidth";

export const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      file(name: { regex: "/builder/" }) {
        id
        publicURL
      }
    }
  `);

  return (
    <Box id="about">
      <MaxWidth>
        <Box margin={{ left: "1vw", right: "1vw" }}>
          <Heading level={2} color="accent-1" alignSelf="center">
            About
          </Heading>
          <Box
            pad="small"
            direction="row"
            wrap={true}
            align="center"
            justify="around"
          >
            <Box
              background="white"
              elevation="medium"
              round="small"
              pad="small"
            >
              <Paragraph
                margin="small"
                size="large"
                color="gray"
                alignSelf="center"
              >
                The Modern Web can be difficult to navigate. Hire an experienced
                web developer who will understand your needs, and can guide you
                through an ever changing environment.
              </Paragraph>
              <Paragraph
                margin="small"
                size="large"
                color="gray"
                alignSelf="center"
              >
                Technologies I use frequently:
              </Paragraph>
              <Box direction="row" gap="small" alignSelf="center">
                <Reactjs size="large" color="plain" />
                <Gatsbyjs size="large" color="plain" />
                <Node size="large" color="plain" />
              </Box>
            </Box>
            <Image
              src={data.file.publicURL}
              fit="contain"
              fallback="builder"
              style={{ minWidth: "300px", maxWidth: "650px" }}
            />
          </Box>
        </Box>
      </MaxWidth>
    </Box>
  );
};
