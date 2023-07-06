import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../redux/userSlice";
import { auth, onAuthStateChanged } from "../Firebase/firebaseConfig";
import Logout from "../Features/auth/Logout";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleThemeMode from "../Components/ToggleThemeMode";
import iconLogo from "../Assets/images/nav-logo.png";

const pages = [
  {
    text: "Portfolio",
    to: "/portfolio",
  },
  {
    text: "Resume",
    to: "/resume",
  },
  // {
  //   text: "About",
  //   to: "/about",
  // },
  // {
  //   text: "Contact",
  //   to: "/contact",
  // },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" enableColorOnDark sx={{ zIndex: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            alt="logo"
            src={iconLogo}
            sx={{
              height: "35px",
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />

          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TBARDINI
          </Typography>
          {/* Mobile view */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                textTransform: "none",
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  component={Link}
                  to={page.to}
                  key={page.text}
                  onClick={handleCloseNavMenu}
                >
                  <Typography color="#f7f7f7" textAlign="center">
                    {page.text}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <IconButton
                    component={Link}
                    color="#f7f7f7"
                    to={"https://www.linkedin.com/in/thiagobardini/"}
                    target="_blank"
                    mr={1}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    component={Link}
                    color="inherit"
                    to={"https://github.com/thiagobardini"}
                    target="_blank"
                    color="#f7f7f7"
                  >
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </MenuItem>
            </Menu>
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
              component="img"
              alt="logo"
              src={iconLogo}
              sx={{
                height: "35px",
                display: { xs: "flex", md: "none" },
                mr: 1,
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TBARDINI
            </Typography>
          </Stack>
          {/* Desktop view */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) =>
              page.text === "Portfolio" ? (
                <Button
                  component={Link}
                  color="inherit"
                  to={page.to}
                  key={page.text}
                  onClick={handleCloseNavMenu}
                  sx={{ textTransform: "none" }}
                >
                  {page.text}
                </Button>
              ) : (
                <Button
                  component={Link}
                  to={page.to}
                  key={page.text}
                  onClick={handleCloseNavMenu}
                  color="inherit"
                  sx={{ textTransform: "none" }}
                >
                  {page.text}
                </Button>
              )
            )}
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
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Box
              component={Link}
              color="inherit"
              to={"https://www.linkedin.com/in/thiagobardini/"}
              target="_blank"
              mr={1}
            >
              <LinkedInIcon />
            </Box>
            <Box
              component={Link}
              color="inherit"
              to={"https://github.com/thiagobardini"}
              target="_blank"
              mr={1}
            >
              <GitHubIcon />
            </Box>
          </Box>
          <ToggleThemeMode />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
