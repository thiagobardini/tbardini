import React from "react";
import { useSelector } from "react-redux";
import { Box, Container, CssBaseline, Typography, Paper } from "@mui/material";
import HeadingTop from "../../../Components/Typography/HeadingTop";
import ButtonFab from "../../../Components/ButtonFab";

const RouterPlanner = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

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
        <Paper
          elevation={3}
          sx={{
            py: 5,
            px: 3,
            borderRadius: 3,
            backdropFilter: darkMode ? "blur(2px)" : "blur(2px)",
            backgroundColor: darkMode
              ? "transparent !important"
              : "#eeeeee !important",
          }}
        >
          <Typography textAlign="center">
            Great news! The Trip Route app will be available very soon!
          </Typography>
        </Paper>
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            justifyContent: "flex-start",
            my: 3,
          }}
        >
          <ButtonFab
            to="/portfolio"
            label="Go back to portfolio"
            onClick={() => window.scrollTo(0, 0)}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default RouterPlanner;
