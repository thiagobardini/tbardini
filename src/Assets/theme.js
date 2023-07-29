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
    breakpoints: {
      values: {
        xs: 0,
        xxs: 400, // Custom breakpoint
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: {
      // subtitle
      subtitle: {
        fontSize: "1.1rem",
      },
    },
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: { main: "#22313f" },
            secondary: { main: "#0092ca" },
            primaryDark: { main: "#1270AF" },
            background: {
              default: "#d6d3d1",
              paper: "#34495e",
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
              default: "#2A2525",
              paper: "#34495e",
            },
            text: {
              primary: "#d6d3d1", // White
              secondary: "#222831",
            },
          }),
    },
  });

// #eeeeee white
