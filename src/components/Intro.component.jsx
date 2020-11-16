import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Heading, Image } from "grommet";
import MaxWidth from "./common/MaxWidth";

export const Intro = () => {
  const data = useStaticQuery(graphql`
    query IntroQuery {
      file(name: { regex: "/reader/" }) {
        id
        publicURL
      }
    }
  `);

  return (
    <Box>
      <MaxWidth>
        <Box pad="small" direction="row" wrap={true} align="center" justify="around">
          <Heading level={3} color="brand">
            Hi! My name is Andrew, and I’m a web developer!
          </Heading>
          <Image src={data.file.publicURL} fit="contain" fallback="reader" style={{minWidth: "300px", maxWidth: "650px"}}/>
        </Box>
      </MaxWidth>
    </Box>
  );
};
