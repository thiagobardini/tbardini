import React from "react";
import { Box, Typography, Divider, Container } from "@mui/material";
import { useLocation } from "react-router-dom";

const Footer = ({ hideOn }) => {
  const location = useLocation();

  if (hideOn.includes(location.pathname)) {
    return null;
  }

  const date = new Date().getFullYear();

  return (
    <>
      <Divider sx={{ width: { xs: "100%", md: "100%" } }} />
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
            p: 4,
          }}
        >
          <Typography variant="body2">tbardini © {date}</Typography>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
