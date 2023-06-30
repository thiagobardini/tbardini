import React from "react";
import { Stack, Container, CssBaseline } from "@mui/material";
import User from "../Features/auth/reduxtoolkitexample/User";
import Logout from "../Features/auth/Logout";

function About() {
  return (
    <Container>
      <CssBaseline />
      <Stack
        my={6}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <User />
        <Logout />
      </Stack>
    </Container>
  );
}

export default About;
