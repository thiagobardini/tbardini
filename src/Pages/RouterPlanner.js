import React from "react";
import { Stack, Container, CssBaseline, Typography } from "@mui/material";
import User from "../Features/auth/reduxtoolkitexample/User";

function RouterPlanner() {
  return (
    <Container>
      <CssBaseline />
      <Stack
        my={6}
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Typography variant="h3">Route Planner</Typography>
        <User />
      </Stack>
    </Container>
  );
}

export default RouterPlanner;
