import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { keyframes } from "@emotion/react";
import {
  Box,
  Container,
  CssBaseline,
  Avatar,
  styled,
  Badge,
  Stack,
  Paper,
  Typography,
  Grid,
  IconButton,
  Tooltip,
  Chip,
} from "@mui/material";
import HeadingTop from "../Components/Typography/HeadingTop";
import { TypeAnimation } from "react-type-animation";
import myself from "../Assets/images/myselfbg.jpg";
import ButtonFab from "../Components/ButtonFab";
import CanvasComponentMini from "../Components/Canvas/CanvasComponentMini";
import ContactForm from "../Components/ContactForm";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScrollTrigger from "react-scroll-trigger";

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
      sequence={["Let's Connect"]}
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
      boxShadow: `0 0 0 2px ${theme.palette.background.box}`,
      width: "18px",
      height: "18px",
      borderRadius: "50%",
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

  const gradientTextStyles = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: "GothamSSm-Bold",
  };

  const socialLinks = [
    {
      icon: <EmailIcon />,
      label: "Email",
      href: "mailto:thiago@flowquantic.ai",
      color: "#EA4335",
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tbardini/",
      color: "#0077B5",
    },
    {
      icon: <GitHubIcon />,
      label: "GitHub",
      href: "https://github.com/tbardini",
      color: darkMode ? "#fff" : "#000",
    },
  ];

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
        <HeadingTop text={textTitle} />
      </Box>

      <Container sx={{ px: 1 }}>
        <Paper
          elevation={0}
          sx={{
            py: 5,
            px: { xs: 2, md: 4 },
            borderRadius: 3,
            backdropFilter: darkMode ? "blur(10px)" : "blur(5px)",
            backgroundColor: darkMode
              ? "rgba(255, 255, 255, 0.02)"
              : "rgba(255, 255, 255, 0.7)",
            border: darkMode 
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.05)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <CssBaseline />

          <Grid container spacing={4} sx={{ position: "relative", zIndex: 1 }}>
            {/* Left side - Avatar and Info */}
            <Grid item xs={12} md={5}>
              <ScrollTrigger onEnter={() => onEnterViewport("fade-left")}>
                <Box
                  id="fade-left"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    opacity: 0,
                    transform: "translateX(-20px)",
                    transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                    "&.fade-left": {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                    pt: 0, // Add padding top to accommodate the crown
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    {/* Crown above avatar */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "-50px",
                        left: "50%",
                        transform: "translateX(-50%) scale(1.2)",
                        width: "120px",
                        height: "120px",
                        zIndex: 2,
                        filter: darkMode ? 'brightness(1.5)' : 'brightness(1)',
                        animation: `${fadeIn} 2s ease-in-out`,
                        animationDelay: '0.5s',
                        animationFillMode: 'backwards',
                      }}
                    >
                      <CanvasComponentMini />
                    </Box>
                    
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <Avatar
                        alt="Thiago Bardini"
                        src={myself}
                        sx={{ 
                          width: 180, 
                          height: 180,
                          border: '3px solid',
                          borderColor: darkMode ? '#1a1a1a' : '#ffffff',
                          boxShadow: darkMode 
                            ? '0 10px 40px rgba(102, 126, 234, 0.4)' 
                            : '0 10px 40px rgba(102, 126, 234, 0.25)',
                        }}
                      />
                    </StyledBadge>
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      mt: 3,
                      mb: 1,
                      fontFamily: "GothamSSm-Bold",
                      color: (theme) => theme.palette.text.primary,
                    }}
                  >
                    Thiago Bardini
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      ...gradientTextStyles,
                      mb: 2,
                    }}
                  >
                    Founder & Software Engineer
                  </Typography>

                  <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                    <Chip
                      icon={<LocationOnIcon />}
                      label="Greater Boston, MA"
                      size="small"
                      sx={{
                        backgroundColor: darkMode 
                          ? 'rgba(102, 126, 234, 0.1)'
                          : 'rgba(102, 126, 234, 0.08)',
                        border: '1px solid',
                        borderColor: darkMode 
                          ? 'rgba(102, 126, 234, 0.3)'
                          : 'rgba(102, 126, 234, 0.2)',
                      }}
                    />
                    <Chip
                      icon={<ScheduleIcon />}
                      label="EST Timezone"
                      size="small"
                      sx={{
                        backgroundColor: darkMode 
                          ? 'rgba(118, 75, 162, 0.1)'
                          : 'rgba(118, 75, 162, 0.08)',
                        border: '1px solid',
                        borderColor: darkMode 
                          ? 'rgba(118, 75, 162, 0.3)'
                          : 'rgba(118, 75, 162, 0.2)',
                      }}
                    />
                  </Stack>

                  <Typography
                    variant="body1"
                    sx={{
                      color: (theme) => theme.palette.text.secondary,
                      fontFamily: "GothamSSm-Light",
                      mb: 3,
                      px: 2,
                      lineHeight: 1.7,
                    }}
                  >
                    I'm always open to discussing new projects, creative ideas, 
                    or opportunities to be part of your visions.
                  </Typography>

                  <Stack direction="row" spacing={2}>
                    {socialLinks.map((link) => (
                      <Tooltip key={link.label} title={link.label}>
                        <IconButton
                          component="a"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            border: '1px solid',
                            borderColor: darkMode 
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 0, 0, 0.08)',
                            backgroundColor: darkMode 
                              ? 'rgba(255, 255, 255, 0.02)'
                              : 'rgba(0, 0, 0, 0.02)',
                            color: link.color,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              borderColor: link.color,
                              backgroundColor: darkMode 
                                ? 'rgba(255, 255, 255, 0.1)'
                                : 'rgba(0, 0, 0, 0.05)',
                              transform: 'translateY(-3px)',
                              boxShadow: `0 10px 20px ${link.color}20`,
                            }
                          }}
                        >
                          {link.icon}
                        </IconButton>
                      </Tooltip>
                    ))}
                  </Stack>
                </Box>
              </ScrollTrigger>
            </Grid>

            {/* Right side - Contact Form */}
            <Grid item xs={12} md={7}>
              <ScrollTrigger onEnter={() => onEnterViewport("fade-right")}>
                <Box
                  id="fade-right"
                  sx={{
                    opacity: 0,
                    transform: "translateX(20px)",
                    transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                    "&.fade-right": {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontFamily: "GothamSSm-Bold",
                      color: (theme) => theme.palette.text.primary,
                    }}
                  >
                    Send me a message
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: (theme) => theme.palette.text.secondary,
                      fontFamily: "GothamSSm-Light",
                    }}
                  >
                    Have a question or want to work together? Feel free to reach out!
                  </Typography>

                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      backgroundColor: darkMode 
                        ? 'rgba(255, 255, 255, 0.02)'
                        : 'rgba(255, 255, 255, 0.5)',
                      border: '1px solid',
                      borderColor: darkMode 
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <ContactForm />
                  </Box>

                  <Box
                    sx={{
                      mt: 3,
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: darkMode 
                        ? 'rgba(102, 126, 234, 0.05)'
                        : 'rgba(102, 126, 234, 0.02)',
                      border: '1px solid',
                      borderColor: darkMode 
                        ? 'rgba(102, 126, 234, 0.2)'
                        : 'rgba(102, 126, 234, 0.1)',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontFamily: "GothamSSm-Light",
                        textAlign: 'center',
                      }}
                    >
                      💡 Response time: Usually within 24-48 hours
                    </Typography>
                  </Box>
                </Box>
              </ScrollTrigger>
            </Grid>
          </Grid>
        </Paper>

        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            my: 3,
          }}
        >
          <ButtonFab
            to="/"
            label="Go Back Home"
            onClick={() => window.scrollTo(0, 0)}
          />
          
          <Typography
            variant="body2"
            sx={{
              color: (theme) => theme.palette.text.secondary,
              fontFamily: "GothamSSm-Light",
            }}
          >
            Let's build something amazing together! 🚀
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
