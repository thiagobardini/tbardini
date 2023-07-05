import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { logoutTest } from "../../redux/authSlices";
import { logout } from "../../redux/userSlice";
import { auth } from "../../Firebase/firebaseConfig";

const Logout = ({ text, to }) => {
  const dispatch = useDispatch();

  // Test Redux only
  const handleLogout = () => {
    dispatch(logoutTest());
  };

  const logoutOfApp = () => {
    // dispatch to the store with the logout action
    dispatch(logout());
    // sign out function from firebase
    auth.signOut();
  };

  const handleLogoutClick = () => {
    handleLogout();
    logoutOfApp();
  };

  return (
    <Button
      color="inherit"
      component={Link}
      to={to}
      onClick={handleLogoutClick}
      sx={{ textTransform: "none" }}
    >
      {text}
    </Button>
  );
};

export default Logout;
