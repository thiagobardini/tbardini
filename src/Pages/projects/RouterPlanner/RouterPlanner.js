import React from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import HeadingTop from "../../../Components/Typography/HeadingTop";
import CardsDrawer from "../../../Components/CardsDrawer";

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
          Great news! The Router Planner app documentation will be available
          very soon!
        </Typography>
      </Container>
      <CardsDrawer />
    </Box>
  );
};

export default RouterPlanner;
