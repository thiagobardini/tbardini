import React from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import HeadingTop from "../../../Components/Typography/HeadingTop";
import BottomDrawer from "../../../Layout/BottomDrawer";

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
      <HeadingTop text='Trip Route' />
      <Container>
        <CssBaseline />
        <Typography textAlign='center'>
          Great news! The Trip Route app will be available very soon!
        </Typography>
      </Container>
      <BottomDrawer />
    </Box>
  );
};

export default RouterPlanner;
