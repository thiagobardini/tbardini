import React from "react";
import { Box, Typography, Divider, Paper, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import tbLogo from "../Assets/images/tbLogo.png";
import tbDark from "../Assets/images/tbDark.png";

const Footer = ({ hideOn }) => {
  const location = useLocation();
  const darkMode = useSelector((state) => state.theme.darkMode);

  if (hideOn.includes(location.pathname)) {
    return null;
  }

  const date = new Date().getFullYear();

  return (
    <>
      <Divider sx={{ width: { xs: "100%", md: "100%" } }} />
      <Paper
        sx={{
          left: 0,
          bottom: 0,
          width: "100%",
          padding: "10px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pb: 2,
          pt: 4,
          backgroundColor: "transparent",
          backdropFilter: darkMode ? "blur(200px)" : "blur(20px)",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          sx={{ position: "relative" }}
        >
          <Box
            component="img"
            alt="tbLogo"
            src={darkMode ? tbLogo : tbDark}
            sx={{
              maxHeight: "auto",
              maxWidth: "100px",
              width: "28px",
              height: "auto",
              cursor: "pointer",
              position: "absolute",
              left: "-29px",
              bottom: "7px",
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              fontFamily: "Trattatello, sans-serif",
              textTransform: "uppercase",
            }}
            color={darkMode ? "#FBF8F9" : "#292725"}
          >
            ardini © {date}
          </Typography>
        </Stack>
      </Paper>
    </>
  );
};

export default Footer;
