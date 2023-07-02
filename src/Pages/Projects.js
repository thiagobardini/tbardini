import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import HeadingTop from "../Components/Typography/HeadingTop";

const Projects = () => {
  return (
    <Box
      mb={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "calc(100vh - 520px)",
      }}
    >
      <HeadingTop text="web developer portfolio" />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box></Box>
      </Container>
    </Box>
  );
};

export default Projects;
