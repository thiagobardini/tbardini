import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { openDrawer, closeDrawer } from "../../redux/drawerSlice";
import { Box, Container, CssBaseline, Grid, Typography, Paper, Link, Chip, Stack } from "@mui/material";
import HeadingTop from "../../Components/Typography/HeadingTop";
import projectsCards from "../../Data/projectsCards.json";
import { TypeAnimation } from "react-type-animation";
import { keyframes } from "@emotion/react";
import ButtonFab from "../../Components/ButtonFab";
import CardsProjects from "../../Components/CardsProjects";
import DrawerProject from "../../Components/DrawerProject";
import Masonry from "react-masonry-css";
import { track } from "@vercel/analytics";

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const Projects = () => {
  const [selectedKeyword, setSelectedKeyword] = useState("show all");

  const darkMode = useSelector((state) => state.theme.darkMode);

  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state) => state.drawerProject.isOpen);
  const openedCardId = useSelector((state) => state.drawerProject.openedCardId);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const projectTitle = queryParams.get('project');

    if (projectTitle) {
      const project = projectsCards.find(card => card.title === projectTitle);
      if (project) {
        dispatch(openDrawer(project.id));
      }
    }
  }, [location.search, dispatch]);

  const heights = [500, 370, 370, 500, 370];

  const cardsToShow = projectsCards.filter((card) => {
    return selectedKeyword === "show all" || card.dev.includes(selectedKeyword);
  });

  let columns = 2;
  if (cardsToShow.length <= 1) {
    columns = 1;
  }

  const breakpointColumnsObj = {
    default: columns,
    1100: columns,
    960: columns,
    880: 1,
  };

  const textTitle = <TypeAnimation sequence={["Projects"]} wrapper='span' speed={50} repeat={1} cursor={false} />;

  const handleCardClick = (cardId, cardTitle) => {
    dispatch(openDrawer(cardId));
    track('Project Clicked', { project: cardId });
    navigate(`?project=${encodeURIComponent(cardTitle)}`);
  };

  const handleCloseDrawer = () => {
    dispatch(closeDrawer());
    navigate(location.pathname);
  };

  // Calculate the counts of each dev type
  const devCounts = {
    frontend: 0,
    backend: 0,
    fullstack: 0,
    automation: 0,
  };

  if (Array.isArray(projectsCards)) {
    projectsCards.forEach((project) => {
      if (project.dev.includes("frontend")) {
        devCounts.frontend++;
      }
      if (project.dev.includes("backend")) {
        devCounts.backend++;
      }
      if (project.dev.includes("fullstack")) {
        devCounts.fullstack++;
      }
      if (project.dev.includes("automation")) {
        devCounts.automation++;
      }
    });
  }

  const handleFilterClick = (keyword) => {
    setSelectedKeyword(keyword);
  };

  const renderBadge = (count, keyword, selectedKeyword, label) => {
    if (count === 0) return null;
    return (
      <Chip
        label={`${label} (${count})`}
        onClick={() => handleFilterClick(keyword)}
        variant={selectedKeyword === keyword ? "filled" : "outlined"}
        sx={{
          cursor: "pointer",
          borderColor: selectedKeyword === keyword 
            ? 'transparent' 
            : darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
          background: selectedKeyword === keyword 
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
            : 'transparent',
          color: selectedKeyword === keyword 
            ? 'white' 
            : (theme) => theme.palette.text.secondary,
          fontFamily: selectedKeyword === keyword ? "GothamSSm-Bold" : "GothamSSm-Light",
          fontWeight: selectedKeyword === keyword ? "bold" : "normal",
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: selectedKeyword === keyword 
              ? '0 4px 15px rgba(102, 126, 234, 0.3)'
              : '0 2px 8px rgba(0, 0, 0, 0.1)',
            borderColor: selectedKeyword === keyword 
              ? 'transparent'
              : '#667eea',
          }
        }}
      />
    );
  };

  const categories = [
    { keyword: "show all", label: "All Projects", count: projectsCards.length },
    {
      keyword: "fullstack",
      label: "Fullstack",
      count: devCounts.fullstack,
    },
    {
      keyword: "frontend",
      label: "Frontend",
      count: devCounts.frontend,
    },
    {
      keyword: "backend",
      label: "Backend",
      count: devCounts.backend,
    },
    {
      keyword: "automation",
      label: "QA Automation",
      count: devCounts.automation,
    },
  ];

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
      <Container sx={{ px: 1 }}>
        <Paper
          elevation={0}
          sx={{
            py: 5,
            borderRadius: 3,
            backdropFilter: darkMode ? "blur(10px)" : "blur(5px)",
            backgroundColor: darkMode
              ? "rgba(255, 255, 255, 0.02)"
              : "rgba(255, 255, 255, 0.7)",
            border: darkMode 
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.05)",
          }}
        >
          <CssBaseline />
          
          <Typography
            color='text.primary'
            mb={3}
            textAlign='center'
            variant='h5'
            sx={{
              px: { xs: 2, sm: 2 },
              animation: `${fadeIn} 2s`,
              position: "relative",
              fontFamily: "GothamSSm-Bold",
            }}
          >
            Explore My Latest Work
          </Typography>
          
          <Grid container justifyContent='center' alignItems='center'>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                px: { xs: 2, sm: 2 },
                mb: 3,
                animation: `${fadeIn} 3s`,
                position: "relative",
              }}
            >
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap justifyContent="center">
                {categories.map((cat) => renderBadge(cat.count, cat.keyword, selectedKeyword, cat.label))}
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              mt={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                px: { xs: 0.5, sm: 2 },
              }}
            >
              {/* Featured Projects - Full Width */}
              {cardsToShow
                .filter((card) => card.isMainFeature)
                .map((card, index) => (
                  <Box key={card.id} sx={{ mb: 3, width: '100%', animation: `${fadeIn} 2s` }}>
                    <CardsProjects
                      id={card.id}
                      title={card.title}
                      subtitle={card.subtitle}
                      description={card.description}
                      logo={card.logo}
                      img={card.img}
                      video={card.video}
                      techs={card.techs}
                      readme={card.readme}
                      live={card.live}
                      github={card.github}
                      instagram={card.instagram}
                      openNewTab={card.openNewTab}
                      index={index}
                      height={500}
                      isMainFeature={true}
                    />
                  </Box>
                ))}

              {/* Regular Projects - Masonry Grid */}
              <Masonry breakpointCols={breakpointColumnsObj} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
                {cardsToShow
                  .filter((card) => !card.isMainFeature)
                  .map((card, index) => (
                    <Link key={card.id} underline='none' onClick={() => handleCardClick(card.id, card.title)}>
                      <Box sx={{ animation: `${fadeIn} 2s`, mb: "12px" }} key={index}>
                        <CardsProjects
                          id={card.id}
                          title={card.title}
                          subtitle={card.subtitle}
                          description={card.description}
                          logo={card.logo}
                          img={card.img}
                          video={card.video}
                          techs={card.techs}
                          readme={card.readme}
                          live={card.live}
                          github={card.github}
                          openNewTab={card.openNewTab}
                          index={index}
                          height={heights[index % heights.length]}
                          isMainFeature={false}
                        />
                      </Box>
                    </Link>
                  ))}
              </Masonry>
            </Grid>
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
          <ButtonFab to='/contact' label="Let's work together, go to contact" onClick={() => window.scrollTo(0, 0)} />
        </Box>
      </Container>
      {projectsCards.map((card, index) => (
        <DrawerProject
          key={index}
          open={isDrawerOpen && card.id === openedCardId}
          onClose={handleCloseDrawer}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          logo={card.logo}
          img={card.img}
          video={card.video}
          mermaid={card.mermaid}
          techs={card.techs}
          readme={card.readme}
          live={card.live}
          testflight={card.testflight}
          github={card.github}
          instagram={card.instagram}
          openNewTab={card.openNewTab}
          id={card.id}
          localUrl={card.localUrl}
        />
      ))}
    </Box>
  );
};

export default Projects;
