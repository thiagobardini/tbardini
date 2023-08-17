import { Button } from "@mui/material";

export const NumberBall = ({
  number,
  color = "#f4d03f",
  onClick,
  hoverable = true,
}) => (
  <Button
    onClick={hoverable ? onClick : null}
    sx={{
      minWidth: "40px",
      color: "#22313f",
      backgroundColor: color,
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      padding: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      cursor: hoverable ? "pointer" : "default",
      "&:hover": {
        backgroundColor: "#f4d03f",
        color: "#22313f",
      },
    }}
  >
    {number}
  </Button>
);

export const MegaBall = ({ number, onClick, selected, hoverable = true }) => (
  <Button
    onClick={hoverable ? onClick : null}
    sx={{
      minWidth: "40px",
      color: "#22313f",
      color: selected ? "#eeeeee" : "#22313f",
      backgroundColor: selected ? "#e74c3c" : "#f4a261",

      width: "40px",
      height: "40px",
      borderRadius: "50%",
      padding: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
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
