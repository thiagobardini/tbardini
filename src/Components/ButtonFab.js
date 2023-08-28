import React, { useEffect } from "react";
import { Fab, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import { useSelector } from "react-redux";

const ButtonFab = ({ to, label, onClick }) => {
  const theme = useTheme();
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fab
      variant="extended"
      component={Link}
      to={to}
      size="medium"
      sx={{
        color: darkMode ? "#eeeeee" : "#282524",
        textTransform: "none",
        width: "auto",
        pointerEvents: "auto",
        border: "1px solid #eeeeee",
        backdropFilter: darkMode ? "blur(2px)" : "blur(50px)",
        backgroundColor: darkMode
          ? "transparent !important"
          : "#transparent !important",
        "&:hover": {
          backdropFilter: darkMode ? "blur(100px)" : "blur(100px)",
          border: darkMode ? "2px solid #eeeeee" : "2px solid #282524",
        },
        "& .moveRight": {
          animation: "moveRight 1s infinite",
        },
      }}
      className="hoverEffect"
      onClick={onClick}
    >
      {label}
      <EastIcon sx={{ ml: 1 }} className="moveRight" />
    </Fab>
  );
};

export default ButtonFab;

// previous code
// {
/* <Button
          component={Link}
          to="/portfolio"
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            textTransform: "lowercase",
            mr: 2,
            width: "117px",
            pointerEvents: "auto",
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          portfolio
        </Button>
        <Button
          component={Link}
          to={"/aboutme"}
          variant="outlined"
          color="primary"
          size="large"
          sx={{
            color: theme.palette.primary.main,
            textTransform: "lowercase",
            width: "117px",
            pointerEvents: "auto",
            backgroundColor: "#eeeeee",
            "&:hover": {
              backgroundColor: "#d6d3d1",
            },
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          about me
        </Button> */
// }
