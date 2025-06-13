import React, { useEffect } from "react";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { useSelector } from "react-redux";

const ButtonFab = ({ to, label, onClick, backArrow = false }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const commonStyles = {
    color: darkMode ? "#eeeeee" : "#1a1a1a",
    textTransform: "capitalize",
    width: "auto",
    height: "auto",
    padding: "0.5rem 1rem",
    pointerEvents: "auto",
    border: darkMode ? "1px solid #eeeeee" : "1px solid #667eea",
    backdropFilter: "blur(10px)",
    backgroundColor: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.95)",
    fontFamily: "GothamSSm-Light",
    fontWeight: darkMode ? 400 : 500,
    boxShadow: darkMode ? "none" : "0 2px 8px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(102, 126, 234, 0.1)",
      border: darkMode ? "2px solid #eeeeee" : "2px solid #667eea",
      transform: "translateY(-2px)",
      boxShadow: "0 5px 15px rgba(102, 126, 234, 0.3)",
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
