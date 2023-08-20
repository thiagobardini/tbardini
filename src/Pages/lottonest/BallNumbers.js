import { Button } from "@mui/material";

export const NumberBall = ({
  number,
  color = "#f4d03f",
  onClick,
  hoverable = true,
  height = "100%",
  width = "100%",
  disabled = false,
}) => (
  <Button
    onClick={!disabled && hoverable ? onClick : null}
    sx={{
      color: "#22313f",
      backgroundColor: color,
      width: width,
      maxWidth: "40px",
      minWidth: "20px",
      borderRadius: "50%",
      height: height,
      maxHeight: "40px",
      minHeight: "20px",
      p: 0.3,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      fontWeight: 600,
      cursor: !disabled && hoverable ? "pointer" : "default",
      "&:hover": {
        backgroundColor: !disabled ? "#f4d03f" : color,
        color: "#22313f",
      },
    }}
  >
    {number}
  </Button>
);

export const MegaBall = ({
  number,
  onClick,
  selected,
  hoverable = true,
  height = "100%",
  width = "100%",
}) => (
  <Button
    onClick={hoverable ? onClick : null}
    sx={{
      color: selected ? "#eeeeee" : "#22313f",
      backgroundColor: selected ? "#e74c3c" : "#f4a261",
      width: width,
      maxWidth: "40px",
      minWidth: "20px",
      borderRadius: "50%",
      height: height,
      maxHeight: "40px",
      minHeight: "20px",
      p: 0.3,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      fontWeight: 600,
      cursor: hoverable ? "pointer" : "default",
      "&:hover": {
        backgroundColor: "#e74c3c",
        color: selected ? "#eeeeee" : "#22313f",
      },
    }}
  >
    {number}
  </Button>
);
