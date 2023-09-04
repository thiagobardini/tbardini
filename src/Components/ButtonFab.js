import React, { useEffect } from "react";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { useSelector } from "react-redux";

const ButtonFab = ({ to, label, onClick, backArrow = false }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const commonStyles = {
    color: "#282524",
    // color: darkMode ? "#eeeeee" : "#eeeeee",
    textTransform: "capitalize",
    width: "auto",
    pointerEvents: "auto",
    // border: "1px solid #eeeeee",
    backdropFilter: darkMode ? "blur(2px)" : "blur(50px)",
    backgroundColor: "#eeeeee",
    "&:hover": {
      // backdropFilter: "blur(100px)",
      // backdropFilter: "sepia(80%)",
      border: darkMode ? "2px solid #eeeeee" : "2px solid #282524",
    },
    "& .moveRight": {
      animation: "moveRight 1s infinite",
    },
  };

  useEffect(() => {
    window.scrollTo(-20, 0);
  }, []);

  const Icon = backArrow ? WestIcon : EastIcon;

  return (
    <Fab
      variant="extended"
      component={Link}
      to={to}
      size="medium"
      sx={commonStyles}
      className="hoverEffect"
      onClick={onClick}
    >
      {backArrow ? (
        <>
          <Icon sx={{ mr: 2 }} className="moveRight" />
          {label}
        </>
      ) : (
        <>
          {label}
          <Icon sx={{ ml: 1 }} className="moveRight" />
        </>
      )}
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
