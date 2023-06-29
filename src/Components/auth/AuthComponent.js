import React from "react";
import {
  Button,
  Typography,
  Link,
  Container,
  CssBaseline,
  Box,
} from "@mui/material";
import SignUp from "./Signup";
import SignIn from "./Signin";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlices";

const AuthComponent = () => {
  const userAuth = useSelector(selectAuth);
  const { isLogged } = userAuth;

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogged ? (
          <Button>Logout</Button>
        ) : (
          <>
            <SignUp />
            <SignIn />
          </>
        )}
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default AuthComponent;
