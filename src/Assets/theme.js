import { createTheme } from "@mui/material";

// Ref: https://mui.com/material-ui/customization/dark-mode/
// Pallete:
// https://mui.com/material-ui/customization/palette/
// https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
// https://mui.com/system/palette/#api
// https://mui.com/material-ui/customization/dark-mode/
// https://medium.com/@mokshi/how-to-persist-custom-material-ui-theme-light-dark-using-redux-toolkit-and-local-storage-in-481f4399eb4b

// Modern theme with sophisticated colors and gradients
export const createCustomTheme = (mode) =>
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        xxs: 400,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: {
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
          body: {
            backgroundImage: mode === 'light' 
              ? 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
              : 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
            minHeight: '100vh',
            transition: 'background-image 0.5s ease-in-out',
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
            // Light mode - Better contrast and visibility
            primary: { 
              main: "#1a1a1a", // Very dark for better contrast
              light: "#4a4a4a",
              dark: "#000000",
            },
            secondary: { 
              main: "#6c5ce7", // Modern purple
              light: "#a29bfe",
              dark: "#5f3dc4",
            },
            chat: { main: "#1a1a1a" },
            primaryDark: { main: "#1a1a1a" },
            background: {
              default: "transparent", // Will use gradient from body
              paper: "rgba(255, 255, 255, 0.95)", // More opaque white
              box: "rgba(255, 255, 255, 0.9)",
              chat: "#ffffff",
            },
            text: {
              primary: "#1a1a1a", // Very dark for maximum contrast
              secondary: "#4a4a4a", // Dark gray
              third: "#6c5ce7", // Purple accent
              fourth: "#1a1a1a",
            },
            customWhite: { main: "#ffffff" },
            gradients: {
              primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              secondary: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              accent: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            }
          }
        : {
            // Dark mode - Deep, rich, modern
            primary: { 
              main: "#dfe6e9", // Light gray
              light: "#ffffff",
              dark: "#b2bec3",
            },
            secondary: { 
              main: "#a29bfe", // Lighter purple
              light: "#d6a2e8",
              dark: "#6c5ce7",
            },
            chat: { main: "#dfe6e9" },
            background: {
              default: "transparent", // Will use gradient from body
              paper: "rgba(30, 30, 40, 0.9)", // Semi-transparent dark
              box: "rgba(40, 40, 55, 0.7)",
              chat: "#1e1e2e",
            },
            text: {
              primary: "#f5f6fa", // Almost white
              secondary: "#dfe6e9", // Light gray
              third: "#74b9ff", // Accent blue
              fourth: "#f5f6fa",
            },
            customWhite: { main: "#f5f6fa" },
            gradients: {
              primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              secondary: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
              accent: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
            }
          }),
    },
  });

// #282524 card - dark mode
// #393635
