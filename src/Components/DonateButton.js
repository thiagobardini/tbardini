import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

function DonateButton() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_blank"
    >
      <input type="hidden" name="cmd" value="_donations" />
      <input type="hidden" name="business" value="thiagobardini@icloud.com" />
      <input type="hidden" name="currency_code" value="USD" />
      <Button
        type="submit"
        variant="text"
        size="large"
        target="_blank"
        sx={{
          fontFamily: "'Cookie', cursive",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          color: "text.primary",
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "1.5rem",
          letterSpacing: "0.1px",
          position: "relative",
          "& img": {
            height: "45px",
            boxShadow: "none",
            border: "none",
            verticalAlign: "middle",
            // backgroundColor: "#F7F7F7",
            backgroundColor: darkMode ? "#6f7364" : "#F7F7F7",
            borderRadius: "10px",
            padding: "10px",
          },
          "& span": {
            marginLeft: "10px",
            fontSize: "1rem",
            verticalAlign: "middle",
          },
          "&:hover, &:active, &:focus": {
            textDecoration: "none",
            opacity: 0.85,
            backgroundColor: "none",
          },
          "&::before": {
            content: "'💨'",
            position: "absolute",
            fontSize: "20px",
            top: "20px",
            left: "15px",
            opacity: 0,
            visibility: "hidden",
            lineHeight: "0",
            textShadow: "0 0 5px rgba(204, 204, 204, 0.5)",
            filter: "blur(1px)",
            transition: "opacity 1s",
          },
          "&:hover::before": {
            opacity: 0.8,
            visibility: "visible",
            animation: "steam 1s infinite",
          },
          "@keyframes steam": {
            "0%": { opacity: 0, transform: "translateY(0) scaleY(0.5)" },
            "50%": { opacity: 0.8 },
            "100%": { opacity: 0, transform: "translateY(-20px) scaleY(1)" },
          },
        }}
        startIcon={
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
          />
        }
      >
        Buy me a coffee
      </Button>
    </form>
  );
}

export default DonateButton;
