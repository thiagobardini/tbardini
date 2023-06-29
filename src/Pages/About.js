import React from "react";
import { Stack, Container } from "@mui/material";
import User from "../Components/auth/User";
import Login from "../Components/auth/Login";
import Logout from "../Components/auth/Logout";
import Form from "../Components/common/Form";

function About() {
  return (
    <Container>
      <Stack
        my={6}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <User />
        <Login title="Sign in" />
        <Logout />
      </Stack>
      <Form title="Login" />
    </Container>
  );
}

export default About;
