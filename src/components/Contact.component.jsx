import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import emailjs from 'emailjs-com';
import {
  Box,
  Heading,
  Image,
  Form,
  FormField,
  TextInput,
  TextArea,
  Button,
} from "grommet";
import MaxWidth from "./common/MaxWidth";

const defaultValue = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [values, setValues] = useState(defaultValue);

  const handleSubmit = () => {
    emailjs.send('service_oqu93cj', 'template_u6leoug', values, 'user_7VoogBOdixVFaA9RFTqLq')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setValues(defaultValue);
  };

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
            <Box
              width="medium"
              margin="small"
              background="white"
              round="medium"
              pad="medium"
              elevation="medium"
            >
              <Heading alignSelf="center" level={4}>
                email: andrew@manleyweb.dev
              </Heading>
              <Form
                color="accent-2"
                name="contact"
                onChange={(nextValue) => setValues(nextValue)}
                onSubmit={handleSubmit}
                value={values}
              >
                <FormField htmlfor="text-input-id" label="Name" name="name">
                  <TextInput
                    id="text-input-id"
                    name="name"
                    placeholder="Andrew"
                  />
                </FormField>
                <FormField label="Email" name="email" required>
                  <TextInput
                    name="email"
                    placeholder="my@email.com"
                  />
                </FormField>
                <FormField label="Message" name="message">
                  <TextArea name="message" placeholder="Here's my idea..." />
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
