import React from "react";
import { useSelector } from "react-redux";
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
import ButtonFab from "../Components/ButtonFab";

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const AboutMe = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

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
        minHeight: "calc(100vh - 85px)",
        alignItems: "center",
        pt: "96px",
      }}
    >
      <HeadingTop text={textTitle} />
      <Container>
        <CssBaseline />
        <Paper
          elevation={3}
          sx={{
            py: 5,
            px: 3,
            borderRadius: 3,
            backdropFilter: darkMode ? "blur(2px)" : "blur(2px)",
            backgroundColor: darkMode
              ? "transparent !important"
              : "#eeeeee !important",
          }}
        >
          <Grid
            container
            spacing={3}
            direction={{ xs: "column", sm: "row" }}
            sx={{ animation: `${fadeIn} 2s` }}
          >
            <Grid
              item
              xs={12}
              sm={2}
              direction="row"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ width: "100%", display: "flex" }}
            >
              <Avatar
                alt="Thiago Bardini"
                src={myself}
                sx={{
                  width: { xs: 150, sm: 200, md: 200 },
                  height: { xs: 150, sm: 200, md: 200 },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography
                variant="h4"
                sx={{
                  mb: 1,
                  fontWeight: 800,
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Thiago Bardini
              </Typography>
              <List>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <Typography
                      sx={{ color: (theme) => theme.palette.text.secondary }}
                    >
                      <LocationOnIcon />
                    </Typography>
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{
                      color: (theme) => theme.palette.text.primary,
                      fontWeight: 700,
                    }}
                  >
                    <Typography
                      variant="span"
                      sx={{
                        fontWeight: 500,
                        color: (theme) => theme.palette.text.secondary,
                      }}
                    >
                      Location:
                    </Typography>{" "}
                    Greater Boston, MA
                  </Typography>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <Typography
                      sx={{ color: (theme) => theme.palette.text.secondary }}
                    >
                      <FlagIcon />
                    </Typography>
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{
                      color: (theme) => theme.palette.text.primary,
                      fontWeight: 700,
                    }}
                  >
                    <Typography
                      variant="span"
                      sx={{
                        fontWeight: 500,
                        color: (theme) => theme.palette.text.secondary,
                      }}
                    >
                      Nationalities:
                    </Typography>{" "}
                    American, Brazilian
                  </Typography>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <Typography
                      sx={{ color: (theme) => theme.palette.text.secondary }}
                    >
                      <LanguageIcon />
                    </Typography>
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{
                      color: (theme) => theme.palette.text.primary,
                      fontWeight: 700,
                    }}
                  >
                    <Typography
                      variant="span"
                      sx={{
                        fontWeight: 500,
                        color: (theme) => theme.palette.text.secondary,
                      }}
                    >
                      Languages:
                    </Typography>{" "}
                    English, Portuguese
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Divider
            sx={{ width: { xs: "100%", md: "70%" }, my: 3, mx: "auto" }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: (theme) => theme.palette.text.primary,
              }}
            >
              About me
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              animation: `${fadeIn} 2s`,
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            I am a detail-oriented software engineer specialized in JavaScript,
            React, Redux, and modern CSS libraries. Currently employed at
            TransPerfect, I work on QA automation tests and frontend
            development, and also collaborate as a Frontend Developer at Code
            for Boston. My professional journey revolves around creating
            responsive websites and managing QA automation processes. In my free
            time, I enjoy hobbies such as playing bass guitar, hiking,
            traveling, and surfing.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: (theme) => theme.palette.text.primary,
              }}
            >
              Objective
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              animation: `${fadeIn} 2s`,
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            Looking to connect and collaborate with a company where I can grow
            personally and professionally. I want to be a part of a community
            that values integrity, intelligence, and creativity.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: (theme) => theme.palette.text.primary,
              }}
            >
              What do I do?
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              animation: `${fadeIn} 2s`,
              color: (theme) => theme.palette.text.secondary,
            }}
          >
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
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            justifyContent: "flex-start",
            my: 3,
          }}
        >
          <ButtonFab
            to="/portfolio"
            label="Let's continue to portfolio"
            onClick={() => window.scrollTo(0, 0)}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
