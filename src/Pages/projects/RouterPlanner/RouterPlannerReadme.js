import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import HeadingTop from "../../../Components/Typography/HeadingTop";

const DocumentationContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  minHeight: `calc(100vh - ${theme.spacing(26)})`,
}));

const List = styled("ul")(({ theme }) => ({
  paddingLeft: theme.spacing(2),
}));

const ListItem = styled("li")(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const RouterPlannerReadme = () => {
  const data = [
    {
      projectIdea: "Google Maps Route Planner",
      live: "/portfolio/router-planner",
      overview:
        "This project showcases a Google Maps route planner application built with Next.js, Material-UI v5, and JavaScript. It allows users to input addresses, view them on a map, and sort them based on proximity for efficient route planning. The application features a search bar, address table using DataGrid, and interactive maps.",
      technologiesUsed: [
        "Next.js: A React framework for server-side rendering and routing.",
        "Material-UI v5",
        "JavaScript",
        "Google Maps API",
      ],
      functionality: [
        "Search Bar: Input addresses to locate them on the map",
        "Map Display: Show inputted addresses on the map.",
        "Address Table: Display addresses in descending order based on proximity.",
        "Route Sorting: Sort addresses by geolocation for efficient route planning.",
        "Route Visualization: Display the selected route on an interactive map.",
      ],
      projectStructure: [
        "SearchBar.js: Render the search bar and handle address search.",
        "MapDisplay.js: Display the map and update location based on user input.",
      ],
      conclusion:
        "This portfolio project demonstrates a Google Maps route planner built with Next.js, Material-UI, and JavaScript. Users can input addresses, view them on interactive maps, and sort them for efficient route planning. The application provides a user-friendly interface for a seamless experience.",
    },
  ];
  return (
    <Box
      mb={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "calc(100vh - 520px)",
      }}
    >
      <HeadingTop text="Route Planner - Docs" />
      <Container>
        <CssBaseline />
        <DocumentationContainer mb={6}>
          {data.map((item, index) => (
            <Box key={index}>
              <Container>
                <Box>
                  <Button
                    to={item.live}
                    component={Link}
                    variant="contained"
                    color="secondary"
                    sx={{
                      textTransform: "capitalize",
                      mr: 2,
                      px: 4,
                      py: 1,
                    }}
                  >
                    <Typography>Visit the Project</Typography>
                  </Button>
                  <Typography variant="h4" mt={2}>
                    Overview
                  </Typography>
                  <Typography variant="body1">{item.overview}</Typography>
                  <Typography variant="h4" mt={2}>
                    Technologies Used
                  </Typography>

                  <List>
                    {item.technologiesUsed.map((tech, index) => (
                      <ListItem key={index}>{tech}</ListItem>
                    ))}
                  </List>

                  <Typography variant="h4" mt={2}>
                    Functionality
                  </Typography>
                  <Typography variant="body1">
                    <List>
                      {item.functionality.map((func, index) => (
                        <ListItem key={index}>{func}</ListItem>
                      ))}
                    </List>
                  </Typography>
                  <Typography variant="h4" mt={2}>
                    Project Structure
                  </Typography>
                  <Typography variant="body1">
                    <List>
                      {item.projectStructure.map((struct, index) => (
                        <ListItem key={index}>{struct}</ListItem>
                      ))}
                    </List>
                  </Typography>
                  <Typography variant="h4" mt={2}>
                    Conclusion
                  </Typography>
                  <Typography variant="body1">{item.conclusion}</Typography>
                </Box>
              </Container>
            </Box>
          ))}
        </DocumentationContainer>
      </Container>
    </Box>
  );
};

export default RouterPlannerReadme;
