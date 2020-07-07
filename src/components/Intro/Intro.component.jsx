import React from "react";
import { Box, Heading } from "grommet";
import MaxWidth from "../common/MaxWidth";

export const Intro = () => (
  <Box >
    <Box><Heading level={2} color="background">hidden content</Heading></Box>
    <MaxWidth>
      <Box>
        <Heading level={3} color="gray">
          Hi! My name is Andrew, and I’m a web developer!
        </Heading>
      </Box>
    </MaxWidth>
  </Box>
);
