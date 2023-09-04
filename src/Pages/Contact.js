import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { keyframes } from "@emotion/react";
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Divider,
  Link,
  Avatar,
  styled,
  Badge,
  Stack,
  Paper,
} from "@mui/material";
import HeadingTop from "../Components/Typography/HeadingTop";
import { TypeAnimation } from "react-type-animation";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import myself from "../Assets/images/myselfbg.jpg";
import ButtonFab from "../Components/ButtonFab";
import ScrollTrigger from "react-scroll-trigger";
import CanvasComponentMini from "../Components/Canvas/CanvasComponentMini";
import ContactForm from "../Components/ContactForm";

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
const Contact = () => {
  const [key, setKey] = useState(0);
  const darkMode = useSelector((state) => state.theme.darkMode);

  // ScrollTrigger keep the animation from running after change the theme
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [darkMode]);

  const onEnterViewport = (animationClass) => {
    const element = document.getElementById(animationClass);
    if (element) {
      element.classList.add(animationClass);
    }
  };

  const textTitle = (
    <TypeAnimation
      sequence={["Contact", 1000, "Let’s work together!", 1000]}
      wrapper="span"
      speed={50}
      repeat={0}
      cursor={false}
      style={{ textDecoration: "none" }}
    />
  );

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      width: "15px",
      height: "15px",
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  return (
    <Box
      key={key}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "calc(100vh - 85px)",
        pt: "96px",
      }}
    >
      <Box>
        <HeadingTop text={textTitle} />{" "}
      </Box>

      <Container>
        <Paper
          elevation={3}
          sx={{
            py: 5,
            px: 3,
            borderRadius: 3,
            backdropFilter: darkMode ? "blur(5px)" : "blur(1px)",
            backgroundColor: darkMode
              ? "transparent !important"
              : "rgba(238, 238, 238, 0.7) !important",
          }}
        >
          <CssBaseline />
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0}
            sx={{ animation: `${fadeIn} 2s`, position: "relative" }}
          >
            <Box>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt="Thiago Bardini"
                  src={myself}
                  sx={{ width: 150, height: 150 }}
                />
              </StyledBadge>
            </Box>
            <Box
              sm={3}
              sx={{
                position: "absolute",

                top: "-35px",
              }}
            >
              <CanvasComponentMini />
            </Box>
          </Stack>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 3,
              }}
            >
              <ContactForm />
            </Box>
          </Box>
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
            to="/"
            label="Go Back Home"
            onClick={() => window.scrollTo(0, 0)}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
