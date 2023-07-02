// src/components/square/Square.js

import { useSelector, useDispatch } from "react-redux";

import { Typography, Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { asyncToggleTheme } from "../redux/themeSlice";

export default function ToggleThemeMode() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",

          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Typography>{darkMode ? "Dark" : "Light"} Mode</Typography>
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => dispatch(asyncToggleTheme())}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
    </>
  );
}
