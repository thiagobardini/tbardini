import React from "react";
import { Box, Typography, Divider, Paper, Stack, Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import tBardiniDotLight from "../Assets/images/TBardini-dot-light.png";
import tBardiniDotDark from "../Assets/images/TBardini-dot-dark.png";

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
        <Stack direction='row' justifyContent='center' alignItems='center' spacing={1} sx={{ position: "relative" }}>
          <Link href='https://www.tbardini.com/' color='inherit' underline='none' target='_blank'>
            <Box
              component='img'
              alt='tbLogo'
              src={darkMode ? tBardiniDotLight : tBardiniDotDark}
              sx={{
                maxWidth: "100px",
                height: "auto",
                cursor: "pointer",
                position: "relative",
                bottom: "2px",
              }}
            />
          </Link>
          <Typography
            variant='subtitle1'
            sx={{
              fontWeight: 900,
              textTransform: "uppercase",
            }}
            color={darkMode ? "#FBF8F9" : "#292725"}
          >
            © {date}
          </Typography>
        </Stack>
      </Paper>
    </>
  );
};

export default Footer;
