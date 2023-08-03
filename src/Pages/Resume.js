import React from "react";
import { Box, Container, CssBaseline, Button, Stack } from "@mui/material";
import HeadingTop from "../Components/Typography/HeadingTop";
import resume from "../Assets/images/resume.jpg";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { keyframes } from "@emotion/react";

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

  const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

  return (
    <Box
      mb={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "calc(100vh - 243px)",
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
                animation: `${fadeIn} 2s`,
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
              textTransform: "lowercase",
              mt: 2,
              py: 1,
            }}
          >
            Download Resume
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Resume;
