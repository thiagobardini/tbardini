import React from "react";
import { Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlices";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box>
      <Button onClick={handleLogout}>Logout</Button>
    </Box>
  );
};

export default Logout;
