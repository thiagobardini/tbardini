import React, { useEffect } from "react";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { useSelector } from "react-redux";

const ButtonFab = ({ to, label, onClick, backArrow = false }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const commonStyles = {
    color: darkMode ? "#eeeeee" : "#282524",
    textTransform: "capitalize",
    width: "auto",
    height: "auto",
    pointerEvents: "auto",
    border: darkMode ? "1px solid #eeeeee" : "1px solid #282524",
    backdropFilter: darkMode ? "blur(2px)" : "blur(50px)",
    backgroundColor: darkMode ? "transparent" : "#d6d3d1",

    fontFamily: "GothamSSm-Light",
    "&:hover": {
      backgroundColor: darkMode ? "transparent" : "#d6d3d1",
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
