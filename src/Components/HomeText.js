import React from "react";
import { Box, styled, Typography, Button } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const CustomBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(2),
  marginTop: "-100px",
  position: "absolute",
}));

const HomeText = () => {
  return (
    <CustomBox component="section">
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 700,
          color: "text.primary",
        }}
      >
        <TypeAnimation
          sequence={["Hey, I'm Thiago"]}
          wrapper="span"
          speed={50}
          repeat={1}
          cursor={false}
        />
      </Typography>

      <Typography
        variant="h5"
        component="p"
        sx={{
          py: 3,
          lineHeight: 1.6,
          color: "text.primary",
          width: { xs: "100%", md: "60%" },
        }}
      >
        <TypeAnimation
          sequence={[
            1200,
            "I'm a software engineer turned problem-solver, bringing creativity and design thinking to every line of code.",
          ]}
          wrapper="span"
          speed={50}
          repeat={1}
        />
      </Typography>
      <Box>
        <Button
          component={Link}
          to="/portfolio"
          variant="contained"
          color="secondary"
          sx={{
            textTransform: "capitalize",
            mr: 2,
            px: 4,
            py: 1,
            pointerEvents: "auto",
          }}
        >
          portfolio
        </Button>
        <Button
          component={Link}
          to={"/resume"}
          variant="outlined"
          color="secondary"
          sx={{
            textTransform: "capitalize",
            px: 4,
            py: 1,
            pointerEvents: "auto",
          }}
        >
          Resume
        </Button>
      </Box>
    </CustomBox>
  );
};

export default HomeText;
