import React from "react";
import { Box, Container, CssBaseline, Typography, Paper } from "@mui/material";
import HeadingTop from "../../../Components/Typography/HeadingTop";

const RouterPlanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 85px)",
        flexGrow: 1,
        pt: "96px",
      }}
    >
      <HeadingTop text="Trip Route" />
      <Container>
        <CssBaseline />
        <Paper elevation={3} sx={{ py: 5, px: 3, borderRadius: 3, mb: 5 }}>
          <Typography textAlign="center">
            Great news! The Trip Route app will be available very soon!
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default RouterPlanner;
