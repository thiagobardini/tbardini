import { Button } from "@mui/material";

export const NumberBall = ({ number, color = "#e74c3c" }) => (
  <Button
    onClick={() => console.log(`Number ${number} clicked!`)} // Adicione sua lógica onClick aqui
    sx={{
      minWidth: "40px",
      color: "#ffffff",
      backgroundColor: color,
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      padding: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      "&:hover": {
        backgroundColor: "#f4d03f",
        color: "#22313f",
      },
    }}
  >
    {number}
  </Button>
);

export const MegaBall = ({ number, onClick }) => (
  <Button
    onClick={onClick}
    sx={{
      minWidth: "40px",
      color: "#ffffff",
      backgroundColor: "#f4d03f", // Coloração diferente para o Mega Ball
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      padding: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      "&:hover": {
        backgroundColor: "#e74c3c",
        color: "#22313f",
      },
    }}
  >
    {number}
  </Button>
);
