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
  Button
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
    <Box>
      <MaxWidth>
        <Heading level={2} color="accent-1">
          Contact
        </Heading>
        <Box direction="row">
          <Box width="medium">
            <Form>
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
              <Button type="submit" label="Submit" primary />
            </Form>
          </Box>
          <Image src={data.file.publicURL} fit="contain" fallback="reader" style={{minWidth: "300px", maxWidth: "650px"}}/>
        </Box>
      </MaxWidth>
    </Box>
  );
};

// export const Contact = () => (
//   <div name="contact">
//     <h1>Contact Me</h1>
//     <div className="contactBody">
//       <form
//         className="contactForm"
//         method="POST"
//         data-netlify="true"
//       >
//         <p>
//           <label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               className="input"
//             />
//           </label>
//         </p>
//         <p>
//           <label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="input"
//             />
//           </label>
//         </p>
//         <p>
//           <label>
//             <textarea
//               name="message"
//               placeholder="Message"
//               className="input"
//             ></textarea>
//           </label>
//         </p>
//         <p>
//           <button className="contactButton" type="submit">
//             Send
//           </button>
//         </p>
//       </form>
//       <img className="contactImg" src={coder} viewBox="0 0 600 425"
//       preserveAspectRatio="xMidYMid"/>
//     </div>
//   </div>
// )
