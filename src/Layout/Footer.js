import React from "react";
import { Box, Typography, Divider, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = ({ hideOn }) => {
  const location = useLocation();

  if (hideOn.includes(location.pathname)) {
    return null;
  }

  const date = new Date().getFullYear();

  return (
    <>
      {/* <Divider sx={{ width: { xs: "100%", md: "100%" } }} /> */}
      <Container maxWidth="xl">
        <Box
          sx={{
            left: 0,
            bottom: 0,
            width: "100%",
            padding: "10px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: 4,
          }}
        >
          <Box>
            <Box
              component="a"
              color="inherit"
              href="https://www.linkedin.com/in/thiagobardini/"
              target="_blank"
              rel="noreferrer"
              m={1}
            >
              <LinkedInIcon />
            </Box>
            <Box
              component="a"
              color="inherit"
              href="https://github.com/thiagobardini"
              target="_blank"
              rel="noreferrer"
              m={1}
            >
              <GitHubIcon />
            </Box>
          </Box>
          <Typography variant="body2">tbardini © {date}</Typography>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
