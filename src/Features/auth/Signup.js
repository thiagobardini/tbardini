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
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../redux/authSlices.js";
import ButtonFab from "../../Components/ButtonFab";
import shirtTbardini from "../../Assets/images/shirt.png";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const darkMode = useSelector((state) => state.theme.darkMode);

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
              navigate("/projects/lottonest");
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "calc(100vh - 85px)",
        pt: "106px",
      }}
    >
      <Container>
        <CssBaseline />
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
            pb: 1,
          }}
        >
          <Box
            component="img"
            alt="shirtTbardini"
            src={shirtTbardini}
            sx={{
              maxHeight: "auto",
              maxWidth: "150px",
              width: "100%",
              height: "auto",
              cursor: "pointer",
            }}
          />
        </Box>
        <Paper
          elevation={3}
          sx={{
            p: 5,
            px: 3,
            borderRadius: 3,
            backdropFilter: darkMode ? "blur(2px)" : "blur(2px)",
            backgroundColor: darkMode
              ? "transparent !important"
              : "#eeeeee !important",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
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
                    to="/projects/lottonest-signin"
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
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            justifyContent: "flex-start",
            my: 3,
          }}
        >
          <ButtonFab
            to="/projects"
            label="Go back to portfolio"
            onClick={() => window.scrollTo(0, 0)}
            backArrow={true}
          />
        </Box>
      </Container>
    </Box>
  );
}
