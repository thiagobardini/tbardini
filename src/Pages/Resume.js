import React from "react";
import { Box, Container, CssBaseline, Button, Stack } from "@mui/material";
import HeadingTop from "../Components/Typography/HeadingTop";
import resume from "../Assets/images/resume.jpg";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Resume = () => {
  const textTitle = (
    <TypeAnimation
      sequence={["resume"]}
      wrapper="span"
      speed={50}
      repeat={1}
      cursor={false}
    />
  );

  return (
    <Box
      mb={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <HeadingTop text={textTitle} />
      <Container sx={{ pt: 2 }}>
        <CssBaseline />
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              alt="logo"
              src={resume}
              sx={{
                maxWidth: "850px",
                minWidth: "350px",
                width: "100%",
              }}
            />
          </Box>
          <Button
            variant="outlined"
            component={Link}
            color="secondary"
            to="https://drive.google.com/file/d/1Ar7FXtFt2h2sMjF1Chr9xdxyLNZqobbY/view?usp=sharing"
            target="_blank"
            size="small"
            sx={{
              textTransform: "capitalize",
            }}
          >
            Dowload Resume
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Resume;
