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
            primary: { main: "#22313f" }, // Dark Slate Gray
            secondary: { main: "#0092ca" }, // Bright Blue
            primaryDark: { main: "#1270AF" }, // Medium Blue
            background: {
              default: "#d6d3d1", // Light Gray
              paper: "#eeeeee", // Charcoal
            },
            text: {
              primary: "#34495e", // Charcoal
              secondary: "#222831", // Dark Slate Gray
              third: "#393635", // Light Gray
            },
            customWhite: { main: "#eeeeee" }, // Off White
          }
        : {
            primary: { main: "#424242" }, // Dark Gray
            secondary: { main: "#0092ca" }, // Bright Blue
            background: {
              default: "#2A2525", // Very Dark Brown
              paper: "#34495e", // Charcoal
            },
            text: {
              primary: "#eeeeee", // Off White
              secondary: "#d6d3d1", // Almost Black
              third: "#d6d3d1", // Almost Black
            },
            customWhite: { main: "#eeeeee" }, // Off White
          }),
    },
  });

// #282524 card - dark mode
// #393635
