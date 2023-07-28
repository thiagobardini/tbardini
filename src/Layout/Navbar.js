import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../redux/userSlice";
import { auth, onAuthStateChanged } from "../Firebase/firebaseConfig";
import Logout from "../Features/auth/Logout";
import { Link, NavLink } from "react-router-dom";
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
import { keyframes } from "@emotion/react";

const pages = [
  {
    text: "portfolio",
    to: "/portfolio",
  },
  {
    text: "resume",
    to: "/resume",
  },
  {
    text: "contact",
    to: "/contact",
  },
];

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [oldScrollPos, setOldScrollPos] = useState(0);
  const [showHamburger, setShowHamburger] = useState(false);

  const theme = useTheme();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const onScroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos > oldScrollPos && currentScrollPos > 50) {
        setTimeout(() => setIsNavVisible(false), 10); // Esconde elementos selecionados
      } else if (currentScrollPos < 200) {
        setTimeout(() => setIsNavVisible(true), 10); // Mostra todo o menu
      }
      setOldScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [oldScrollPos]);

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

  useEffect(() => {
    const onScroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 200) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

  return (
    <AppBar
      position="fixed"
      sx={{
        py: "2px",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: !isNavVisible && "transparent",
        boxShadow: !isNavVisible && "none",
        backgroundImage: !isNavVisible && "none",
        transition:
          "background-color 200ms linear, boxShadow 200ms linear, backgroundImage 200ms linear",
        animation: `${fadeIn} 2s`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isNavVisible === true && (
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
                opacity: !isNavVisible ? 0 : 1,
                visibility: !isNavVisible ? "hidden" : "visible",
                transition: "opacity 2000ms linear, visibility 2000ms linear",
              }}
            >
              <Box
                component="img"
                alt="logo"
                src={logoNav}
                sx={{
                  height: "120px",
                }}
              />
            </Box>
          )}
          {/* Mobile view */}
          {isNavVisible === true && (
            <Box
              onClick={toggleHamburger}
              sx={{ display: { xs: "flex", md: "none" }, zIndex: 9999 }}
            >
              <HamburgerMenu isOpen={isOpen} setOpen={setOpen} pages={pages} />
            </Box>
          )}
          {/* Only show logo if isNavVisible is true */}
          {isNavVisible === true && (
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
                    height: "120px",
                  }}
                />
              </Box>
            </Stack>
          )}

          {/* Desktop view */}
          {showHamburger && (
            <Box
              sx={{
                display: "flex",
                mt: 1,
                position: "absolute",
                left: "-12px",
                top: "0px",
                borderRadius: "50%",
                backgroundColor: darkMode ? "#0092ca" : "#22313f",
                height: "70px",
                width: "70px",
                justifyContent: "center",
                alignItems: "center",
                opacity: isNavVisible ? 0 : 1,
                visibility: isNavVisible ? "hidden" : "visible",
                transition: "opacity 2000ms linear, visibility 2000ms linear",
                animation: `${fadeIn} 2s`,
              }}
            >
              <HamburgerMenu isOpen={isOpen} setOpen={setOpen} pages={pages} />
            </Box>
          )}

          {/* Only show pages and icons if isNavVisible is true */}
          {isNavVisible === true && (
            <>
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
                        height: "5px",
                        bottom: "4px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#1270AF",
                        visibility: "hidden",
                        transition: "all 0.2s ease-in-out",
                      },
                      "&:hover::after": {
                        visibility: "visible",
                        width: "90%",
                      },
                      "&.active::after": {
                        visibility: "visible",
                        width: "90%",
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
            </>
          )}

          <Box>{isNavVisible === true && <ToggleThemeMode />}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
