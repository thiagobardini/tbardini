import React from "react";
import { Box, Typography, Divider, Paper, Stack, Link, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { keyframes } from "@emotion/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
// import tBardiniDotLight from "../Assets/images/TBardini-dot-light.png";
// import tBardiniDotDark from "../Assets/images/TBardini-dot-dark.png";
// import tBardiniDotDark from "../Assets/images/import tBardiniDotLight from "../Assets/images/TBardini-dot-light.png";
import flowquanticLogo from "../Assets/images/powered-flowquantic.png";

const Footer = ({ hideOn }) => {
  const location = useLocation();
  const darkMode = useSelector((state) => state.theme.darkMode);

  if (hideOn.includes(location.pathname)) {
    return null;
  }

  const date = new Date().getFullYear();

  const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/thiagobardini/",
      label: "LinkedIn"
    },
    {
      icon: <GitHubIcon />,
      url: "https://github.com/thiagobardini",
      label: "GitHub"
    },
    {
      icon: <EmailIcon />,
      url: "mailto:hello@flowquantic.ai",
      label: "Email"
    }
  ];

  return (
    <>
      <Divider sx={{ 
        borderColor: darkMode 
          ? "rgba(102, 126, 234, 0.1)" 
          : "rgba(102, 126, 234, 0.05)",
        mt: 8,
      }} />
      <Paper
        sx={{
          width: "100%",
          backgroundColor: darkMode 
            ? "rgba(30, 30, 30, 0.5)"
            : "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid",
          borderColor: darkMode 
            ? "rgba(102, 126, 234, 0.1)"
            : "rgba(102, 126, 234, 0.05)",
          py: 6,
          mt: "auto",
        }}
        elevation={0}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center">
            {/* Logo and Branding */}
            <Stack 
              direction="row" 
              alignItems="center" 
              spacing={2}
              sx={{
                animation: `${fadeIn} 0.8s ease-out`,
              }}
            >
              <Link 
                href="https://www.flowquantic.ai/" 
                underline="none" 
                target="_blank"
                sx={{
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  }
                }}
              >
                <Box
                  component="img"
                  alt="Powered by FlowQuantic"
                  src={flowquanticLogo}
                  sx={{
                    maxHeight: "150px",
                    width: "auto",
                    opacity: 0.9,
                    filter: darkMode ? "brightness(1.1)" : "brightness(1)",
                  }}
                />
              </Link>
            </Stack>

            {/* Social Links */}
            <Stack 
              direction="row" 
              spacing={2}
              sx={{
                animation: `${fadeIn} 0.8s ease-out 0.2s`,
                animationFillMode: "both",
              }}
            >
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: darkMode ? "#eeeeee" : "#667eea",
                    transition: "all 0.3s ease",
                    p: 1,
                    borderRadius: "50%",
                    backgroundColor: darkMode 
                      ? "rgba(102, 126, 234, 0.1)"
                      : "rgba(102, 126, 234, 0.05)",
                    "&:hover": {
                      backgroundColor: darkMode 
                        ? "rgba(102, 126, 234, 0.2)"
                        : "rgba(102, 126, 234, 0.1)",
                      transform: "translateY(-2px)",
                      color: "#667eea",
                    }
                  }}
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </Stack>

            {/* Copyright and Additional Info */}
            <Stack 
              alignItems="center" 
              spacing={1}
              sx={{
                animation: `${fadeIn} 0.8s ease-out 0.4s`,
                animationFillMode: "both",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  fontFamily: "GothamSSm-Light",
                  textAlign: "center",
                }}
              >
                Building AI-powered solutions for service businesses
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  fontFamily: "GothamSSm-Light",
                  opacity: 0.7,
                }}
              >
                © {date} Thiago Bardini. All rights reserved.
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Paper>
    </>
  );
};

export default Footer;
