import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Grid,
  CssBaseline,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlagIcon from "@mui/icons-material/Flag";
import myself from "../Assets/images/aboutme.jpg";
import { TypeAnimation } from "react-type-animation";
import HeadingTop from "../Components/Typography/HeadingTop";
import LanguageIcon from "@mui/icons-material/Language";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const AboutMe = () => {
  const textTitle = (
    <TypeAnimation
      sequence={["about me"]}
      wrapper="span"
      speed={50}
      repeat={1}
      cursor={false}
    />
  );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "calc(100vh - 243px)",
        alignItems: "center",
      }}
    >
      <HeadingTop text={textTitle} />
      <Container>
        <CssBaseline />
        <Paper elevation={3} sx={{ p: 5, borderRadius: 3, mb: 5 }}>
          <Grid
            container
            spacing={3}
            alignItems="center"
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            sx={{ animation: `${fadeIn} 2s` }}
          >
            <Grid item xs={12} sm={5} md={7}>
              <Avatar
                alt="Your Name"
                src={myself}
                sx={{
                  width: { xs: 150, sm: 200, md: 200 },
                  height: { xs: 150, sm: 200, md: 200 },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={7} md={5}>
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontWeight: 800,
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Thiago Bardini
              </Typography>
              <List>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <Typography color="inherit">
                      <LocationOnIcon />
                    </Typography>
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{ color: (theme) => theme.palette.text.primary }}
                  >
                    <span style={{ fontWeight: 700 }}>Address:</span> Greater
                    Boston, MA
                  </Typography>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <Typography color="inherit">
                      <FlagIcon />
                    </Typography>
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{ color: (theme) => theme.palette.text.primary }}
                  >
                    <span style={{ fontWeight: 700 }}>Nationalities:</span>{" "}
                    American, Brazilian
                  </Typography>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <Typography color="inherit">
                      <LanguageIcon />
                    </Typography>
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{ color: (theme) => theme.palette.text.primary }}
                  >
                    <span style={{ fontWeight: 700 }}>Languages:</span> English,
                    Portuguese
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Divider
            sx={{ width: { xs: "100%", md: "50%" }, my: 3, mx: "auto" }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              About me
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 2, animation: `${fadeIn} 2s` }}>
            I am a detail-oriented software engineer specialized in JavaScript,
            React, Redux, and modern CSS libraries. Currently employed at
            TransPerfect as a QA Engineer Automation, I also collaborate as a
            Frontend Developer at Code for Boston. My professional journey
            involves creating responsive websites and managing QA automation. In
            my free time, I enjoy hobbies such as playing bass guitar, hiking,
            traveling, and surfing.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Objective
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 2, animation: `${fadeIn} 2s` }}>
            Looking to connect and collaborate with a company where I can grow
            personally and professionally. I want to be a part of a community
            that values integrity, intelligence, and creativity.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              What do I do?
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 3, animation: `${fadeIn} 2s` }}>
            {/* As a professional working in both frontend development and QA
            automation, I have a unique combination of skills that contribute to
            creating modern responsive websites and automation tests. Recently,
            I have been interested in Mobile Applications using React Native. */}
            I have substantial experience in customizing or creating modern
            responsive websites with creative design involving latest
            frameworks. I enjoy working as a Front End/Full Stack Developer.
            Recently, I have been interested in Mobile Applications using React
            Native.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DownloadIcon />}
            size="large"
            sx={{ textTransform: "none", mt: 2, textDecoration: "none" }}
            component="a"
            href="https://drive.google.com/uc?export=download&id=1Ar7FXtFt2h2sMjF1Chr9xdxyLNZqobbY"
            target="_blank"
          >
            download my resume
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutMe;
