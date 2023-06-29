import React from "react";
import { Stack, Container } from "@mui/material";
import User from "../Components/auth/User";
import Login from "../Components/auth/Login";
import Logout from "../Components/auth/Logout";

function About() {
  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <User />
        <Login />
        <Logout />
      </Stack>
    </Container>
  );
}

export default About;
