import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
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
        <Box>App will be availble soon!</Box>
      </Container>
    </Box>
  );
};

export default RouterPlanner;
