import React from "react";
import { Box, Typography, Container, CssBaseline } from "@mui/material";

const Projects = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "500px",
          mminWidth: "250px",
        }}
      >
        <Typography component="h1" variant="h5">
          Projects
        </Typography>
      </Box>
    </Container>
  );
};

export default Projects;
