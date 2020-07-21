import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Heading, Image, Paragraph } from "grommet";
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
    <Box>
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
            <Box background="white" elevation="medium" round="small" pad="small">
              <Paragraph size="large" color="gray" alignSelf="center">
                The Modern Web can be difficult to navigate. Hire an experienced
                web developer who will understand your needs, and can guide you
                through an ever changing environment.
              </Paragraph>
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
