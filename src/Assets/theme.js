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
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "@global": {
            "@font-face": [
              {
                fontFamily: "Trattatello",
                src: `url('./fonts/Trattatello.ttf') format('truetype')`,
              },
              {
                fontFamily: "TuskerGrotesk",
                src: `url('./fonts/TuskerGrotesk-4600Semibold.ttf') format('truetype')`,
              },
              {
                fontFamily: "PPNeueMontreal-Medium",
                src: `url('./fonts/PPNeueMontreal-Medium.otf') format('truetype')`,
              },
              {
                fontFamily: "GothamSSm-Bold",
                src: `url('./fonts/GothamSSm-Bold.otf') format('truetype')`,
              },
              {
                fontFamily: "GothamSSm-Light",
                src: `url('./fonts/GothamSSm-Light.otf') format('truetype')`,
              },
              {
                fontFamily: "Gotham-Book",
                src: `url('./fonts/Gotham-Book.otf') format('truetype')`,
              },
              {
                fontFamily: "YatraOne-Regular",
                src: `url('./fonts/YatraOne-Regular.ttf') format('truetype')`,
              },
            ],
          },
        },
      },
    },
    typography: {
      fontFamily: "Gotham-Book, Arial, sans-serif",
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
            chat: { main: "#" }, // Bright Blue
            primaryDark: { main: "#1270AF" }, // Medium Blue
            background: {
              default: "#d6d3d1", // Light Gray
              box: "#d6d3d1", // Charcoal
            },
            text: {
              primary: "#34495e", // Charcoal
              secondary: "#222831", // Dark Slate Gray
              third: "#222831", // Light Gray
            },
            customWhite: { main: "#eeeeee" }, // Off White
          }
        : {
            primary: { main: "#424242" }, // Dark Gray
            secondary: { main: "#0092ca" }, // Bright Blue
            chat: { main: "#eeeeee" }, // Bright Blue
            background: {
              default: "#2A2525", // Very Dark Brown
              box: "#34495e", // Charcoal
            },
            text: {
              primary: "#eeeeee", // Off White
              secondary: "#d6d3d1", // Almost Black
              third: "#eeeeeeeeeeee", // Almost Black
            },
            customWhite: { main: "#eeeeee" }, // Off White
          }),
    },
  });

// #282524 card - dark mode
// #393635
