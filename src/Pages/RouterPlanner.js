import React from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import HeadingTop from "../Components/Typography/HeadingTop";

const RouterPlanner = () => {
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
      <HeadingTop text="Route Planner" />
      <Container>
        <CssBaseline />
        <Typography textAlign="center">
          Great news! The app will be available very soon!
        </Typography>
      </Container>
    </Box>
  );
};

export default RouterPlanner;
