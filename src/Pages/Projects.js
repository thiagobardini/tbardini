import React from "react";
import { Box, Container, CssBaseline, Grid } from "@mui/material";
import HeadingTop from "../Components/Typography/HeadingTop";
import CardsPortfolio from "../Components/CardsPortfolio";
import projectsCards from "../Data/projectsCards.json";

const Projects = () => {
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
        <Grid container spacing={2} justifyContent="center">
          {projectsCards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
