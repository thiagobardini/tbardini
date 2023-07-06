import React from "react";
import { Box, Container, CssBaseline, Button, Stack } from "@mui/material";
import HeadingTop from "../Components/Typography/HeadingTop";
import resume from "../Assets/images/resume.jpg";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <Box
      mb={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "calc(100vh - 520px)",
      }}
    >
      <HeadingTop text="Resume" />
      <Container>
        <CssBaseline />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
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
