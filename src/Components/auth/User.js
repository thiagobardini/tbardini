import React from "react";
import { Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlices";

const User = () => {
  // const { email } = useSelector((state) => state.auth);
  const user = useSelector(selectAuth);
  const { email } = user;

  return (
    <Box>
      {email !== "" ? (
        <Typography>Usuário: {email}</Typography>
      ) : (
        <Typography>Hello</Typography>
      )}
    </Box>
  );
};

export default User;
