import { createTheme } from "@mui/material";

// Ref: https://mui.com/material-ui/customization/dark-mode/
// Pallete:
// https://mui.com/material-ui/customization/palette/
// https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
// https://mui.com/system/palette/#api
// https://mui.com/material-ui/customization/dark-mode/
// https://medium.com/@mokshi/how-to-persist-custom-material-ui-theme-light-dark-using-redux-toolkit-and-local-storage-in-481f4399eb4b

export const createCustomTheme = (mode) =>
  createTheme({
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: { main: "#22313f" },
            secondary: { main: "#0092ca" },
            primaryDark: { main: "#1270AF" },
            background: {
              default: "#eeeeee",
              paper: "#eeeeee",
            },
            text: {
              primary: "#34495e",
              secondary: "#0092ca",
            },
          }
        : {
            primary: { main: "#424242" }, // Dark grey
            secondary: { main: "#0092ca" },
            background: {
              default: "#34495e", // Slightly lighter grey
              paper: "#34495e", // Slightly lighter grey
            },
            text: {
              primary: "#eeeeee", // White
              secondary: "#222831",
            },
          }),
    },
  });
