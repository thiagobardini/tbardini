import { useState } from "react";
import {
  auth,
  // createUserWithEmailAndPassword,
  // updateProfile,
  signInWithEmailAndPassword,
} from "../../Firebase/firebaseConfig.js";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Sign in an existing user with Firebase
    signInWithEmailAndPassword(auth, email, password)
      // returns an auth object after a successful authentication
      // userAuth.user contains all our user details
      .then((userAuth) => {
        // store the user's information in the redux state
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );
      })
      // display the error if any
      .catch((err) => {
        alert(err);
      });

    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "500px",
          mminWidth: "250px",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Typography
                color="primary"
                component={Link}
                to="/"
                variant="body2"
              >
                Forgot password?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                color="primary"
                component={Link}
                to="/signup"
                variant="body2"
              >
                Don't have an account? Sign Up
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
