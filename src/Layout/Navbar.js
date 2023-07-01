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
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import BottomDrawer from "./BottomDrawer";

const pages = [
  {
    text: "Projects",
    to: "/projects",
  },
  {
    text: "About",
    to: "/about",
  },
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
    <AppBar position="static" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
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
              }}
            >
              {pages.map((page) =>
                page.text === "Projects" ? (
                  // FIXME: ADDED REDUX
                  <MenuItem
                    component={Link}
                    to={page.to}
                    key={page.text}
                    onClick={handleCloseNavMenu}
                  >
                    <BottomDrawer color="black" />
                  </MenuItem>
                ) : (
                  <MenuItem
                    component={Link}
                    to={page.to}
                    key={page.text}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page.text}</Typography>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) =>
              page.text === "Projects" ? (
                <Button
                  component={Link}
                  to={page.to}
                  key={page.text}
                  onClick={handleCloseNavMenu}
                >
                  {/* // FIXME: ADDED REDUX */}
                  <BottomDrawer color="white" />
                </Button>
              ) : (
                <Button
                  component={Link}
                  to={page.to}
                  key={page.text}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block", fontSize: 14 }}
                >
                  {page.text}
                </Button>
              )
            )}
          </Box>
          {location.pathname === "/signin" ? (
            <Logout text="Sign up" to="/signup" />
          ) : (
            <>
              {!user ? (
                <Logout text="Sign in" to="/signin" />
              ) : (
                <Logout text="Logout" />
              )}
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
