import React, { useState } from "react";
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

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const defaultValue = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [state, setState] = useState({ defaultValue });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => setState(defaultValue))
      .catch((error) => alert(error));
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
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onChange={(e) => setState(e)}
                onSubmit={handleSubmit}
                value={state}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={(e) => setState(e)} />
                  </label>
                </p>
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
                    placeholder="email"
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
