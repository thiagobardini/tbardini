import {
  styled,
  Typography,
  Button,
  Stack,
  Avatar,
  Badge,
} from "@mui/material";
import { Link } from "react-router-dom";
import myself from "../Assets/images/myself.jpeg";
import { TypeAnimation } from "react-type-animation";

const HireMe = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  const StickyButton = styled(Button)({
    position: "fixed",
    top: 90, // adjust this value based on your navbar's height
    right: 10, // adjust this value based on your preference
  });

  return (
    <StickyButton
      component={Link}
      to="/contact"
      variant="text"
      sx={{
        pt: 6,
        pointerEvents: "auto",
        color: "#eeeeee",
      }}
      onClick={() => window.scrollTo(0, 0)}
      startIcon={
        <Stack direction="row" spacing={2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={myself} />
          </StyledBadge>
        </Stack>
      }
    >
      <Typography
        variant="h6"
        sx={{
          letterSpacing: "0.08em",
          color: "#1270AF",
          borderRadius: "5px",
          fontWeight: "900",
          textShadow:
            "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff",
        }}
      >
        <TypeAnimation
          sequence={[1200, "HIRE ME!"]}
          wrapper="span"
          speed={50}
          repeat={1}
        />
      </Typography>
    </StickyButton>
  );
};

export default HireMe;
