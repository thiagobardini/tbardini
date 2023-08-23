import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  CssBaseline,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../../Firebase/firebaseConfig.js";
import { useDispatch } from "react-redux";
import { changeUser } from "../../redux/authSlices.js";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      return alert("Please enter your name");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
          updateProfile(userAuth.user, {
            displayName: name,
            photoURL: profilePic,
          })
            .then(() => {
              // Dispatch the user information and redirect
              dispatch(
                changeUser({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoUrl: profilePic,
                })
              );
              navigate("/portfolio/lottonest");
            })
            .catch((error) => {
              console.log("Failed to update profile");
            });
        })
        .catch((err) => {
          alert(err);
        });
    }
    // Remove from the fields
    setEmail("");
    setPassword("");
    setName("");
    setProfilePic("");
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
        my: 4,
      }}
    >
      <CssBaseline />
      <Paper elevation={3} sx={{ py: 5, px: 3, borderRadius: 3, mb: 5 }}>
        <Box
          sx={{
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  color="info"
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color="info"
                  fullWidth
                  id="profilePic"
                  label="Profile picture URL (optional)"
                  name="profilePic"
                  autoComplete="url"
                  onChange={(e) => setProfilePic(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color="info"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color="info"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="info"
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography
                  component={Link}
                  to="/portfolio/lottonest-signin"
                  variant="body2"
                  color="secondary.main"
                >
                  Already have an account? Sign in
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
