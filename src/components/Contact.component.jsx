import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  Box,
  Heading,
  Image,
  Form,
  FormField,
  TextInput,
  MaskedInput,
  TextArea,
  Button,
} from "grommet";
import MaxWidth from "./common/MaxWidth";

export const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      file(name: { regex: "/coder/" }) {
        id
        publicURL
      }
    }
  `);
  return (
    <Box id="contact">
      <MaxWidth>
       <Box margin={{ left: "1vw", right: "1vw" }}>
          <Heading level={2} color="accent-1" alignSelf="center">
            Contact
          </Heading>
  
          <Box direction="row" align="center" justify="around" wrap="reverse">
            <Image
              src={data.file.publicURL}
              fit="contain"
              fallback="reader"
              style={{ minWidth: "300px", maxWidth: "650px" }}
            />
            <Box width="medium" margin="small" background="white" round="medium" pad="medium" elevation="medium">
            <Heading alignSelf="center" level={4}>email: andrew@manleyweb.dev</Heading>
              <Form name="contact" method="POST" data-netlify="true">
                <FormField label="Name" name="name">
                  <TextInput name="name" />
                </FormField>
                <FormField label="Email" name="email" required>
                  <MaskedInput
                    name="email"
                    mask={[
                      { regexp: /^[\w\-_.]+$/, placeholder: "example" },
                      { fixed: "@" },
                      { regexp: /^[\w]+$/, placeholder: "my" },
                      { fixed: "." },
                      { regexp: /^[\w]+$/, placeholder: "com" },
                    ]}
                  />
                </FormField>
                <FormField label="Message" name="message">
                  <TextArea name="message" />
                </FormField>
                <Button type="submit" label="Submit" color="accent-1" primary />
              </Form>
            </Box>
          </Box>
       </Box>
      </MaxWidth>
    </Box>
  );
};

