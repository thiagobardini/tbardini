import React from "react";
import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
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
        <Typography color="text.primary" my={2} textAlign="center" variant="h5">
          Check out my latest web software development portfolio projects.
        </Typography>
        <Grid container spacing={6} justifyContent="center">
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
