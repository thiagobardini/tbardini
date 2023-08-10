import React from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import HeadingTop from "../../../Components/Typography/HeadingTop";

const RouterPlanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 209px)",
        flexGrow: 1,
      }}
    >
      <HeadingTop text="Trip Route" />
      <Container>
        <CssBaseline />
        <Typography textAlign="center">
          Great news! The Trip Route app will be available very soon!
        </Typography>
      </Container>
    </Box>
  );
};

export default RouterPlanner;
