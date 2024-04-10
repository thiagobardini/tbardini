import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlices";
import { auth } from "../../Firebase/firebaseConfig";

const Logout = ({ text, to }) => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    console.log("Logout function called");
    dispatch(logout());
    auth
      .signOut()
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out", error);
      });
  };

  return (
    <Button
      variant="outlined"
      color="info"
      component={Link}
      to={to}
      onClick={logoutOfApp}
    >
      <Typography
        sx={{ textTransform: "capitalize", fontFamily: "GothamSSm-Light" }}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default Logout;
