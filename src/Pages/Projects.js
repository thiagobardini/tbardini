import { useState } from "react";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import HeadingTop from "../Components/Typography/HeadingTop";
import CardsPortfolio from "../Components/CardsPortfolio";
import projectsCards from "../Data/projectsCards.json";
import { TypeAnimation } from "react-type-animation";
import { keyframes } from "@emotion/react";

const Projects = () => {
  const [selectedKeyword, setSelectedKeyword] = useState("show all");

  const handleKeywordChange = (keyword) => {
    setSelectedKeyword(keyword);
  };

  // This function gets all unique keywords from all cards
  const getAllKeywords = () => {
    const allKeywords = projectsCards.flatMap((card) => card.techs);
    return Array.from(new Set(allKeywords));
  };

  const getFilterPhrase = () => {
    if (selectedKeyword === "show all") {
      return (
        <span>
          Showing all projects. Use the filter to list them by skill or
          technology.
        </span>
      );
    } else {
      const filteredProjects = projectsCards.filter((card) =>
        card.techs.includes(selectedKeyword)
      );
      const formattedKeyword = <strong>{selectedKeyword}</strong>;
      const phrase = (
        <span>
          Showing <strong>{filteredProjects.length}</strong> projects filtered
          by {formattedKeyword}.
        </span>
      );
      return phrase;
    }
  };

  const textTitle = (
    <TypeAnimation
      sequence={["portfolio"]}
      wrapper="span"
      speed={50}
      repeat={1}
      cursor={false}
    />
  );

  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  `;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "calc(100vh - 243px)",
      }}
    >
      <HeadingTop text={textTitle} />
      <Container>
        <Paper elevation={3} sx={{ p: 5, borderRadius: 3, mb: 5 }}>
          <CssBaseline />
          <Typography
            color="text.primary"
            mb={2}
            textAlign="center"
            variant="h6"
            sx={{ fontWeight: 700 }}
          >
            Check out my latest web software development portfolio projects.
          </Typography>
          <Grid container justifyContent="center" alignItems="center" xs={12}>
            <Grid
              item
              xs={12}
              sx={{
                display: "inline-block",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Button
                sx={{ mr: 1, textTransform: "lowercase" }}
                variant={
                  selectedKeyword === "show all" ? "contained" : "outlined"
                }
                color="secondary"
                onClick={() => handleKeywordChange("show all")}
                size="small"
              >
                show all
              </Button>
              {getAllKeywords().map((keyword, index) => (
                <Button
                  key={keyword}
                  color="secondary"
                  variant={
                    selectedKeyword === keyword ? "contained" : "outlined"
                  }
                  onClick={() => handleKeywordChange(keyword)}
                  sx={{
                    my: 1,
                    mr: 1,
                    display: "inline-block",
                    textTransform: "lowercase",
                  }}
                  size="small"
                >
                  {keyword}
                </Button>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                gutterBottom
                textAlign="center"
                sx={{
                  color: "rgb(138, 138, 138)",
                }}
              >
                {selectedKeyword === "show all" ? (
                  "Showing all projects. Use the filter to list them by skill or technology."
                ) : (
                  <span>{getFilterPhrase()}</span>
                )}
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {projectsCards
                .filter((card) => {
                  if (selectedKeyword === "show all") {
                    return true;
                  } else {
                    return card.techs.includes(selectedKeyword);
                  }
                })
                .map((card) => (
                  <Box key={card.id} sx={{ animation: `${fadeIn} 2s` }}>
                    <CardsPortfolio
                      id={card.id}
                      title={card.title}
                      description={card.description}
                      img={card.img}
                      techs={card.techs}
                      readme={card.readme}
                      live={card.live}
                      github={card.github}
                      openNewTab={card.openNewTab}
                    />
                  </Box>
                ))}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Projects;
