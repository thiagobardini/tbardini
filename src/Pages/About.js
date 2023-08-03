import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import HeadingTop from "../Components/Typography/HeadingTop";
import User from "../Features/auth/reduxtoolkitexample/User";

const About = () => {
  return (
    <Box
      mb={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "calc(100vh - 243px)",
      }}
    >
      <HeadingTop text="about me" />
      <Container>
        <CssBaseline />
        <Box>
          <User />
        </Box>
      </Container>
    </Box>
  );
};

export default About;
