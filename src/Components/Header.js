import React from "react";
import { Box, Button, styled, Typography, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "60vh",
    display: "flex",
    justifyContent: "center",
    // sizes
    gap: theme.spacing(2),
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

  return (
    <CustomBox component="header">
      <CssBaseline />
      {/*  Box text  */}
      <BoxText component="section">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "text.primary",
          }}
        >
          {/* Hey, I'm Thiago */}
          <TypeAnimation
            sequence={["Hey, I'm Thiago"]}
            wrapper="span"
            speed={50}
            repeat={1}
            cursor={false}
          />
        </Typography>

        <Typography
          variant="h6"
          component="p"
          sx={{
            py: 3,
            lineHeight: 1.6,
            color: "text.primary",
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
            }}
          >
            portfolio
          </Button>
          <Button
            component={Link}
            to={"/about"}
            variant="outlined"
            color="secondary"
            sx={{
              textTransform: "capitalize",
              px: 4,
              py: 1,
            }}
          >
            About me
          </Button>
        </Box>
      </BoxText>

      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            flex: "1",
            paddingTop: "30px",
            alignSelf: "center",
          },
          [theme.breakpoints.up("md")]: {
            flex: "2",
            alignSelf: "flex-end",
          },
        })}
      >
        {/* <HeroImage component="img" src={headerImg} alt="headerImg" /> */}
      </Box>
    </CustomBox>
  );
};

export default Header;
