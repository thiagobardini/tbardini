import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Chip,
  Button,
} from "@mui/material";
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

const StyledDescription = styled(Typography)({
  flexGrow: 1,
  textAlign: "center",
  color: "#fff",
});

const StyledCard = styled(Card)(({ theme }) => ({
  width: 380,
  height: 330.117,
  marginTop: 10,
  margin: 10,
  padding: 2.2,
  border: `1px solid ${theme.palette.grey[300]}`,
  position: "relative",
  overflow: "hidden",
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: `0 4px 12px 0 ${theme.palette.grey[300]}`,
  },
}));

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  textAlign: "center",
  marginTop: "15px",
  paddingBottom: "0px",
}));

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "auto",
});

const StyledTags = styled("div")(({ showChips }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  opacity: showChips ? 1 : 0,
  transition: "opacity 0.3s ease",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  width: "100%",
  height: "100%",
  zIndex: 1,
  gap: 5,
}));

const StyledChip = styled(Chip)(({ theme }) => ({
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
  backgroundColor: "#f5f5f5",
  zIndex: 1,
  gap: 5,
}));

const StyledEmphasis = styled("em")({
  display: "block",
  marginTop: "auto",
  color: "rgb(138, 138, 138)",
});

const CardsPortfolio = ({
  id,
  title,
  description,
  img,
  techs,
  live,
  readme,
  github,
}) => {
  const [showChips, setShowChips] = useState(false);
  // console.log(projectCard, "project");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseEnter = () => {
    setShowChips(true);
  };

  const handleMouseLeave = () => {
    setShowChips(false);
  };
  return (
    <Box>
      <StyledCard
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
            <StyledChip color="primary" label={tag} />
          ))}
          {/* <StyledChip color="primary" label="MORE .." /> */}
        </StyledTags>
        {/* <StyledCardHeader title={projectCard?.title} /> */}
        <StyledCardContent sx={{ pt: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              alt="logo"
              src={img}
              sx={{ height: "140px", pt: 4, pb: 1 }}
            />
          </Box>
          {/* <StyledEmphasis>Article</StyledEmphasis> */}
          <StyledDescription sx={{ textDecoration: "none" }}>
            <span className="blue">{description}</span>
          </StyledDescription>
        </StyledCardContent>
        <StyledBottomBar>
          <Button
            component={Link}
            to={live}
            variant="contained"
            color="primary"
            target={github ? "_blank" : undefined}
            rel={github ? "noopener noreferrer" : undefined}
          >
            Live
          </Button>
          {github === "" ? (
            <Button
              component={Link}
              to={readme}
              variant="outlined"
              color="primary"
            >
              Readme
            </Button>
          ) : (
            <Button
              component={Link}
              to={github}
              variant="outlined"
              color="primary"
              target={github ? "_blank" : undefined}
              rel={github ? "noopener noreferrer" : undefined}
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
