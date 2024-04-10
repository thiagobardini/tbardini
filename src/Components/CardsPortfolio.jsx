import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  Button,
  useTheme,
} from "@mui/material";
import { useSelector } from "react-redux";
import { red, amber, green } from "@mui/material/colors";

const StyledTopBar = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  height: 30,
  backgroundColor: "#ddd",
  zIndex: 2,
}));

const StyledCircle = styled("div")(({ color }) => ({
  width: 14,
  height: 14,
  borderRadius: "50%",
  backgroundColor: color,
  margin: "0 4px",
}));

const StyledTitle = styled(Typography)({
  flexGrow: 1,
  textAlign: "center",
  color: "#8a8a8a",
  position: "absolute",
  width: "100%",
});

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "auto",
  transition: "opacity 0.3s ease",
  "&:hover": {
    opacity: 0.5,
  },
});

const StyledTags = styled("div")(({ showChips }) => ({
  position: "absolute",
  top: "48%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  opacity: showChips ? 1 : 0,
  transition: "opacity 0.3s ease",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  width: "100%",
  height: "76%",
  zIndex: 1,
  gap: 5,
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  textTransform: "lowercase",
  margin: "4px",
}));

const StyledBottomBar = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 50,
  backgroundColor: "#ddd",
  zIndex: 2,
  gap: 5,
}));

const StyledCardHover = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const CardsPortfolio = ({
  id,
  title,
  description,
  img,
  techs,
  live,
  readme,
  github,
  openNewTab,
}) => {
  const [showChips, setShowChips] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const theme = useTheme();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleMouseEnter = () => {
    setShowChips(true);
  };

  const handleMouseLeave = () => {
    setShowChips(false);
  };

  const StyledDescription = styled(Typography)({
    flexGrow: 1,
    textAlign: "center",
  });

  const StyledCard = styled(Card)(({ theme }) => ({
    width: 380,
    height: 330.117,
    marginTop: 10,
    margin: 10,
    padding: 2.2,
    border: `2px solid ${theme.palette.grey[300]}`,
    position: "relative",
    overflow: "hidden",
    backgroundColor: darkMode ? "#282524" : "#eeeeee",
  }));
  return (
    <Box key={id} sx={{ display: "flex", justifyContent: "center" }}>
      <StyledCard>
        <StyledCardHover
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <StyledTopBar>
            <StyledCircle color={red[500]} />
            <StyledCircle color={amber[500]} />
            <StyledCircle color={green[500]} />
            <StyledTitle variant="subtitle1">{title}</StyledTitle>
          </StyledTopBar>
          <StyledTags showChips={showChips}>
            {techs.map((tag) => (
              <StyledChip color="secondary" label={tag} />
            ))}
          </StyledTags>
          <StyledCardContent sx={{ pt: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                alt="logo"
                src={img}
                sx={{
                  height: "140px",
                  pt: 4,
                  pb: 1,
                }}
              />
            </Box>
            <StyledDescription
              sx={{
                textDecoration: "none",
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              <span className="blue">{description}</span>
            </StyledDescription>
          </StyledCardContent>
        </StyledCardHover>
        <StyledBottomBar>
          <Button
            component={Link}
            to={live}
            variant="contained"
            color="secondary"
            target={!openNewTab ? "_blank" : undefined}
            rel={!openNewTab ? "noopener noreferrer" : undefined}
            onClick={() => window.scrollTo(0, 0)}
            sx={{ textTransform: "lowercase" }}
          >
            Live
          </Button>
          {readme === "" ? null : (
            <Button
              component={Link}
              to={readme}
              variant="outlined"
              onClick={() => window.scrollTo(0, 0)}
              sx={{
                textTransform: "lowercase",
                color: theme.palette.primary.main,
                backgroundColor: "#eeeeee",
                "&:hover": {
                  backgroundColor: "#d6d3d1",
                },
              }}
            >
              Readme
            </Button>
          )}

          {github === "" ? null : (
            <Button
              component={Link}
              to={github}
              variant="outlined"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.scrollTo(0, 0)}
              sx={{
                textTransform: "lowercase",
                color: theme.palette.primary.main,
                backgroundColor: "#eeeeee",
                "&:hover": {
                  backgroundColor: "#d6d3d1",
                },
              }}
            >
              Github
            </Button>
          )}
        </StyledBottomBar>
      </StyledCard>
    </Box>
  );
};

export default CardsPortfolio;
