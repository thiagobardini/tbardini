import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
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

const LottoNestReadme = ({ displayNone }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const data = [
    {
      projectIdea: "LottoNest Lottery Number Checker",
      live: "/projects/lottonest",
      overview:
        "LottoNest is designed for lottery enthusiasts who want an easy and efficient way to check their lottery numbers. With a sleek design and intuitive interface, LottoNest offers a delightful user experience. The version 1 of the app allows manual entry of both tickets and the Mega Million results. Future updates are planned to enhance this process.",
      technologiesUsed: [
        "React.js: A JavaScript library for building user interfaces.",
        "Material-UI v5",
        "JavaScript",
      ],
      functionality: [
        "Number Checker: Manually input your ticket numbers and check against the Mega Million results.",
        "Intuitive UI: Designed with user experience in mind.",
        // You can add more features here.
      ],
      projectStructure: [
        "NumberChecker.js: Render the number checker functionality.",
        "LottoResults.js: Display the manually inputted Mega Million results.",
        // Add more structures if needed.
      ],
      conclusion:
        "LottoNest version 1 demonstrates an intuitive way of manually checking lottery numbers. While the Mega Million results and ticket entries are currently manual, version 2 will automate these processes, making the app even more user-friendly. Stay tuned for upcoming updates!",
    },
  ];
  return (
    <Box
      mb={6}
      sx={{
        py: 5,
        px: 3,
        borderRadius: 3,
        backdropFilter: darkMode ? "blur(5px)" : "blur(1px)",
        backgroundColor: darkMode
          ? "transparent !important"
          : "rgba(238, 238, 238, 0.7) !important",
      }}
    >
      <HeadingTop text="LottoNest - Docs" />
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
        </DocumentationContainer>
      </Container>
    </Box>
  );
};

export default LottoNestReadme;
