import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../redux/userSlice";
import { auth, onAuthStateChanged } from "../Firebase/firebaseConfig";
import Logout from "../Features/auth/Logout";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Button,
  Stack,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ToggleThemeMode from "../Components/ToggleThemeMode";
import logoNav from "../Assets/images/logoNav.png";
import HamburgerMenu from "./HamburgerMenu";

const pages = [
  {
    text: "portfolio",
    to: "/portfolio",
  },
  {
    text: "resume",
    to: "/resume",
  },
  // {
  //   text: "About",
  //   to: "/about",
  // },
  {
    text: "contact",
    to: "/contact",
  },
];

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const theme = useTheme();

  const user = useSelector(selectUser);

  const location = useLocation();

  const dispatch = useDispatch();

  // check at page load if a user is authenticated
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  const toggleHamburger = () => {
    setOpen(!isOpen);
  };

  return (
    <AppBar position="static" sx={{ zIndex: 2, py: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              mr: 2,
            }}
          >
            <Box
              component="img"
              alt="logo"
              src={logoNav}
              sx={{
                height: "100px",
              }}
            />
          </Box>
          {/* Mobile view */}
          <Box
            onClick={toggleHamburger}
            sx={{ display: { xs: "flex", md: "none" }, zIndex: 9999 }}
          >
            <HamburgerMenu isOpen={isOpen} setOpen={setOpen} pages={pages} />
          </Box>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              flexGrow: 1,
            }}
          >
            <Box
              component={Link}
              to="/"
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                mr: 2,
              }}
            >
              <Box
                component="img"
                alt="logo"
                src={logoNav}
                sx={{
                  height: "100px",
                }}
              />
            </Box>
          </Stack>

          {/* Desktop view */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                component={NavLink}
                to={page.to}
                key={page.text}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontWeight: "500",
                  fontSize: "1.4rem",
                  textDecoration: "none",
                  position: "relative",
                  mr: 2,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "60%",
                    height: "4px",
                    bottom: "6px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#1270AF",
                    visibility: "hidden",
                    transition: "all 0.2s ease-in-out",
                  },
                  "&:hover::after": {
                    visibility: "visible",
                    width: "80%",
                  },
                  "&.active::after": {
                    visibility: "visible",
                    width: "60px",
                  },
                }}
                isActive={(match) => {
                  if (!match) {
                    return false;
                  }
                  return true;
                }}
              >
                {page.text}
              </Button>
            ))}
          </Box>

          {/* {location.pathname === "/signin" ? (
            <Logout text="Sign up" to="/signup" />
            ) : (
              <>
              {!user ? (
                <Logout text="Sign in" to="/signin" />
                ) : (
                  <Logout text="Logout" />
                  )}
                  </>
                )} */}
          <Box
            sx={{
              display: { xs: "none", md: "inline-block" },
            }}
          >
            <Box
              component={Link}
              color="inherit"
              to={"https://www.linkedin.com/in/thiagobardini/"}
              target="_blank"
              m={1}
            >
              <LinkedInIcon />
            </Box>
            <Box
              component={Link}
              color="inherit"
              to={"https://github.com/thiagobardini"}
              target="_blank"
              m={1}
            >
              <GitHubIcon />
            </Box>
          </Box>
          <Box>
            <ToggleThemeMode />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
