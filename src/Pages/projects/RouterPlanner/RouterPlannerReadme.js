import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  styled,
  Button,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import HeadingTop from "../../../Components/Typography/HeadingTop";

const List = styled("ul")(({ theme }) => ({
  paddingLeft: theme.spacing(2),
}));

const ListItem = styled("li")(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const RouterPlannerReadme = ({ displayNone }) => {
  const data = [
    {
      projectIdea: "Trip Route",
      live: "/portfolio/trip-route",
      overview:
        "This project showcases a Google Maps trip route application built with Next.js, Material-UI v5, and JavaScript. It allows users to input addresses, view them on a map, and sort them based on proximity for efficient route planning. The application features a search bar, address table using DataGrid, and interactive maps.",
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
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 85px)",
        flexGrow: 1,
        pt: "96px",
      }}
    >
      <HeadingTop text="Trip Route - Docs" />
      <Container>
        <CssBaseline />
        <Paper elevation={3} sx={{ py: 5, px: 3, borderRadius: 3, mb: 5 }}>
          <Box mb={6}>
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
                        textTransform: "lowercase",
                        mr: 2,
                        px: 4,
                        py: 1,
                        display: displayNone && "none",
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
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default RouterPlannerReadme;
