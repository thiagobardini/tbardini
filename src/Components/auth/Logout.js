import React from "react";
import { Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlices";

const Logout = ({ text }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Button color="inherit" onClick={handleLogout}>
      {text}
    </Button>
  );
};

export default Logout;
