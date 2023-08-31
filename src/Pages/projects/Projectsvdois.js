import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import HeadingTop from "../../Components/Typography/HeadingTop";
import projectsCards from "../../Data/projectsCards.json";
import { TypeAnimation } from "react-type-animation";
import { keyframes } from "@emotion/react";
import ButtonFab from "../../Components/ButtonFab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CardsProjects from "../../Components/CardsProjects";
import Masonry from "@mui/lab/Masonry";

const Projectsvdois = () => {
  const [selectedKeyword, setSelectedKeyword] = useState("show all");
  const [showMoreKeywords, setShowMoreKeywords] = useState(false);

  const darkMode = useSelector((state) => state.theme.darkMode);

  const heights = [500, 370, 370, 500, 370];
  // const heights = ["100%", "80%", "80%", "100%", "80%"];

  // const getWidth = (index) => {
  //   const pattern = ["100%", "80%", "80%", "100%", "80%"];
  //   return pattern[index % pattern.length];
  // };

  const handleKeywordChange = (keyword) => {
    setSelectedKeyword(keyword);
  };

  // This function gets all unique keywords from all cards
  const getAllKeywords = () => {
    const allKeywords = projectsCards.flatMap((card) => card.techs);
    return Array.from(new Set(allKeywords));
  };

  const prioritizeKeywords = (keywords) => {
    const priorityKeywords = [
      "javascript",
      "react-js",
      "next-js",
      "redux toolkit",
      "typescript",
    ];

    return keywords.sort((a, b) => {
      const lowerA = a.toLowerCase();
      const lowerB = b.toLowerCase();

      if (
        priorityKeywords.includes(lowerA) &&
        priorityKeywords.includes(lowerB)
      ) {
        return (
          priorityKeywords.indexOf(lowerA) - priorityKeywords.indexOf(lowerB)
        );
      }
      if (priorityKeywords.includes(lowerA)) {
        return -1;
      }
      if (priorityKeywords.includes(lowerB)) {
        return 1;
      }
      return lowerA.localeCompare(lowerB);
    });
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
      sequence={["projects"]}
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
        minHeight: "calc(100vh - 85px)",
        pt: "96px",
      }}
    >
      <HeadingTop text={textTitle} />
      <Container>
        <Paper
          elevation={3}
          sx={{
            py: 5,
            px: 0,
            borderRadius: 3,
            backdropFilter: darkMode ? "blur(2px)" : "blur(2px)",
            backgroundColor: darkMode
              ? "transparent !important"
              : "#eeeeee !important",
          }}
        >
          <CssBaseline />
          <Typography
            color="text.primary"
            mb={2}
            textAlign="center"
            variant="h5"
            sx={{ fontWeight: 700 }}
          >
            Explore my latest software development projects.
          </Typography>
          <Grid container justifyContent="center" alignItems="center">
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
                <Typography
                  sx={{ color: darkMode ? "#d6d3d1" : "" }}
                  variant="subtitle2"
                >
                  show all
                </Typography>
              </Button>
              {prioritizeKeywords(getAllKeywords()).map((keyword, index) => (
                <Button
                  key={index}
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
                  <Typography
                    sx={{ color: darkMode ? "#d6d3d1" : "" }}
                    variant="subtitle2"
                  >
                    {keyword}
                  </Typography>
                </Button>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                gutterBottom
                textAlign="center"
                sx={{
                  mt: 1,
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                {selectedKeyword === "show all" ? (
                  "Showing all projects. Use the filter to list them by skill or technology."
                ) : (
                  <span>{getFilterPhrase()}</span>
                )}
              </Typography>
            </Grid>

            <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
              <Masonry
                columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}
                spacing={3}
              >
                {projectsCards
                  .filter((card) => {
                    if (selectedKeyword === "show all") {
                      return true;
                    } else {
                      return card.techs.includes(selectedKeyword);
                    }
                  })
                  .map((card, index) => (
                    <Box sx={{ animation: `${fadeIn} 2s` }} key={index}>
                      <CardsProjects
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        logo={card.logo}
                        img={card.img}
                        techs={card.techs}
                        readme={card.readme}
                        live={card.live}
                        github={card.github}
                        openNewTab={card.openNewTab}
                        index={index}
                        height={heights[index % heights.length]}
                        // width={getWidth(index)}
                      />
                    </Box>
                  ))}
              </Masonry>
            </Box>
          </Grid>
        </Paper>
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            justifyContent: "flex-start",
            my: 3,
          }}
        >
          <ButtonFab
            to="/contact"
            label="Let's work together, go to contact"
            onClick={() => window.scrollTo(0, 0)}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Projectsvdois;
