import React from "react";
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
} from "@mui/material";
import HeadingTop from "../Components/Typography/HeadingTop";
import { TypeAnimation } from "react-type-animation";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import myself from "../Assets/images/myself.jpeg";

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
const Contact = () => {
  const textTitle = (
    <TypeAnimation
      sequence={["contact", 1000, "let’s work together!", 1000]} // adjust sequence timing here
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
      mb={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "calc(100vh - 180px)",
        alignItems: "center",
      }}
    >
      <Box sx={{ minHeight: "140px" }}>
        <HeadingTop text={textTitle} />{" "}
      </Box>

      <Container>
        <CssBaseline />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}
          sx={{ animation: `${fadeIn} 2s` }}
        >
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
        </Stack>
        <Box sx={{ p: 3, textAlign: "center" }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: (theme) => theme.palette.text.primary,
            }}
          >
            Looking forward to connecting and collaborating with you. Feel free
            to reach out!
          </Typography>

          <Divider
            sx={{ width: { xs: "100%", md: "50%" }, my: 6, mx: "auto" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Link
              href="tel:978-648-7075"
              color="inherit"
              underline="none"
              target="_blank"
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIcon />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    animation: `${fadeIn} 2s`,
                  }}
                >
                  978-648-7075
                </Typography>
              </Box>
            </Link>
            <Link
              href="mailto:thiagobardini@icloud.com?subject=🤘 Hi Thiago, I'd like to hire you"
              color="inherit"
              underline="none"
              target="_blank"
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    animation: `${fadeIn} 2s`,
                  }}
                >
                  thiagobardini@icloud.com
                </Typography>
              </Box>
            </Link>
            <Link
              href="https://www.linkedin.com/in/thiagobardini/"
              color="inherit"
              underline="none"
              target="_blank"
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LinkedInIcon sx={{ fontSize: "2rem" }} />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    animation: `${fadeIn} 2s`,
                  }}
                >
                  thiagobardini
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
