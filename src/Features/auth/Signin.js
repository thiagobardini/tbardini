import { useState } from "react";
import {
  auth,
  signInWithEmailAndPassword,
} from "../../Firebase/firebaseConfig.js";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../redux/authSlices.js";
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
  const isLogged = useSelector((state) => state.authUser.isLogged);

  const navigate = useNavigate();

  if (isLogged) {
    navigate("/portfolio/lottonest");
    return null; // if you log in, you don't need to see the signin page
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Sign in an existing user with Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        // store the user's information in the redux state
        dispatch(
          changeUser({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );

        navigate("/portfolio/lottonest");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 209px)",
        flexGrow: 1,
        mb: 4,
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "500px",
          mminWidth: "250px",
          backgroundColor: (theme) => theme.palette.background.default,
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
            color="info"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            color="info"
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
            color="info"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Typography
                color="secondary.main"
                component={Link}
                to="/"
                variant="body2"
              >
                Forgot password?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                color="secondary.main"
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
