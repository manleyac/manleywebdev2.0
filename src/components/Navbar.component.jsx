import React, { useState, useEffect } from "react";
import { Header, Heading, Box, Button, Collapsible } from "grommet";
import { Menu, Close } from "grommet-icons";
import { Link } from "gatsby";
import MaxWidth from "./common/MaxWidth";


export const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [show, setShow] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)")
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)
  }, [])

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const NavLinkClick = () => {
    setShow(false);
  };

  const NavButton = () => {
    return (
      <>
        {show ? (
          <Button
            icon={<Close color="white" />}
            onClick={() => setShow(false)}
          />
        ) : (
          <Button icon={<Menu color="white" />} onClick={() => setShow(true)} />
        )}
      </>
    );
  };

  const largeScreen = () => (
    <Header
      background="brand"
      elevation="xlarge"
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 5 }}
    >
      <Box alignContent="center" fill="horizontal">
        <MaxWidth>
          <Box direction="row" justify="between" align="baseline">
            <Link to="/">
              <Heading level={2} margin="small" color="white">
                Manley Web Dev
              </Heading>
            </Link>
            <Box direction="row" gap="small" margin="small">
              {navLinks("navLink")}
            </Box>
          </Box>
        </MaxWidth>
      </Box>
    </Header>
  );

  const smallScreen = () => (
    <Box
      background="brand"
      elevation="xlarge"
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 5 }}
    >
      <Header background="brand">
        <Box alignContent="center" fill="horizontal">
          <Box direction="row" justify="between" align="baseline">
            <Link id="logo" to="/">
            <Heading level={2} margin="small" color="white">
              Manley Web Dev
            </Heading>
            </Link>
            <NavButton />
          </Box>
        </Box>
      </Header>
      <Collapsible direction="vertical" open={show}>
        <Box
          direction="column"
          alignSelf="center"
          gap="small"
          justify="around"
          align="center"
          background="brand"
        >
          {navLinks("navLink", NavLinkClick)}
        </Box>
      </Collapsible>
    </Box>
  );

  return <>{isSmallScreen ? smallScreen() : largeScreen()}</>;
};

const navLinks = (name, clickFunction) => {
  const linkArray = [
    <Link className={name} to="/blog" key="blogLink" onClick={clickFunction}>
      <Heading level={3} color="accent-1">
        Blog
      </Heading>
    </Link>,

    <Link
      className={name}
      to="/#projects"
      key="projectLink"
      onClick={clickFunction}
    >
      <Heading level={3} color="accent-1">
        Projects
      </Heading>
    </Link>,

    <Link className={name} to="/#about" key="aboutLink" onClick={clickFunction}>
      <Heading level={3} color="accent-1">
        About
      </Heading>
    </Link>,

    <Link
      className={name}
      to="/#contact"
      key="contactLink"
      onClick={clickFunction}
    >
      <Heading level={3} color="accent-1">
        Contact
      </Heading>
    </Link>,
  ];
  return linkArray;
};
