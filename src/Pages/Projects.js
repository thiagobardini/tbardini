import { useState } from "react";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import HeadingTop from "../Components/Typography/HeadingTop";
import CardsPortfolio from "../Components/CardsPortfolio";
import projectsCards from "../Data/projectsCards.json";

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
      return "Showing all projects. Use the filter to list them by skill or technology.";
    } else {
      const filteredProjects = projectsCards.filter((card) =>
        card.techs.includes(selectedKeyword)
      );
      const formattedKeyword = `*${selectedKeyword}*`;
      const phrase = `Showing ${filteredProjects.length} projects filtered by ${formattedKeyword}.`;
      return phrase;
    }
  };

  return (
    <Box
      mb={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <HeadingTop text="portfolio" />
      <Container>
        <CssBaseline />
        <Typography color="text.primary" my={2} textAlign="center" variant="h5">
          Check out my latest web software development portfolio projects.
        </Typography>
        <Grid
          container
          // spacing={2}
          justifyContent="center"
          alignItems="center"
          xs={12}
        >
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
              sx={{ mr: 1 }}
              variant={
                selectedKeyword === "show all" ? "contained" : "outlined"
              }
              color="secondary"
              onClick={() => handleKeywordChange("show all")}
              size="small"
            >
              Show All
            </Button>
            {getAllKeywords().map((keyword, index) => (
              <Button
                key={keyword}
                color="secondary"
                variant={selectedKeyword === keyword ? "contained" : "outlined"}
                onClick={() => handleKeywordChange(keyword)}
                sx={{
                  my: 1,
                  mr: 1,
                  display: "inline-block",
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
              sx={{ color: "rgb(138, 138, 138)" }}
            >
              {selectedKeyword === "show all" ? (
                "Showing all projects. Use the filter to list them by skill or technology."
              ) : (
                <span>
                  Showing <strong>{projectsCards.length}</strong> projects
                  filtered by <strong>{selectedKeyword}</strong>.
                </span>
              )}
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
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
                <Box key={card.id}>
                  <CardsPortfolio
                    id={card.id}
                    title={card.title}
                    description={card.description}
                    img={card.img}
                    techs={card.techs}
                    readme={card.readme}
                    live={card.live}
                    github={card.github}
                  />
                </Box>
              ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
