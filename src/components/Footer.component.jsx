import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Text, Image } from "grommet";
import MaxWidth from "./common/MaxWidth";

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allFile(filter: { name: { regex: "/twitter|github/" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);
  const twitter = data.allFile.edges[0].node.publicURL;
  const github = data.allFile.edges[1].node.publicURL;
  return (
    <Box fill="horizontal" background="brand">
      <MaxWidth>
        <Box
          direction="row"
          alignContent="between"
          justify="between"
          margin={{ left: "1vw", right: "1vw" }}
        >
          <Box>
            <Text
              color="white"
              alignSelf="start"
              margin={{ top: "36px", bottom: "2px" }}
            >
              Andrew Manley <span> © {new Date().getFullYear()}</span>
            </Text>
            <a href="https://icons8.com/" style={{marginBottom: "8px"}}><Text color="white">graphics by icons8</Text></a>
          </Box>
          <Box direction="row" alignSelf="end" gap="small" margin={{bottom: "12px"}}>
            <a
              href="https://twitter.com/DevManley"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`follow me on twitter`}
            >
              <Image width="30" src={twitter} alt="twitter" />
            </a>
            <a
              href="https://github.com/manleyac"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`follow me on github`}
            >
              <Image width="30" src={github} alt="github" />
            </a>
          </Box>
        </Box>
      </MaxWidth>
    </Box>
  );
};

// <div className="footer">
// <div className="rights">
//   <h4>Andrew Manley</h4>
//   <span> © {new Date().getFullYear()}</span>
// </div>
// <div className="socialLinks">

// </div>
// </div>
